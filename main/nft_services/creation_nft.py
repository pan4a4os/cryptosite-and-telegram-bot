from web3.gas_strategies.time_based import construct_time_based_gas_price_strategy
from web3.middleware import geth_poa_middleware
from web3.exceptions import ContractLogicError
from web3 import Web3, middleware
import requests
import json


url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
metadata_hashes_path = 'main/nft_services/metadata_hashes.json'
metadata_path = 'main/nft_services/metadata.json'

metadata_hashes = json.load(open(metadata_hashes_path))
base_metadata = json.load(open(metadata_path))


def pin_img_to_pinata(name, description, image_path):
    print('pin image to pinata')

    files = [
        ('file', (name, open(image_path, 'rb'), 'application/octet-stream'))
    ]
    headers = {
        'pinata_api_key': "c1833f5262f99427c079",
        'pinata_secret_api_key': "f88d6fe00243844978a00a12924b2cbb57b83d3724ba8f73170d9a8dc5d1e610"
    }
    response = requests.request("POST", url, headers=headers, files=files)
    json_data = response.json()

    # print(json_data)

    img_metadata = {
        "name": name,
        "hash": json_data['IpfsHash'],
        "image": f"https://gateway.pinata.cloud/ipfs/{json_data['IpfsHash']}",
        "description": description,
        "attributes": [],
    }

    json.dump(img_metadata, open(metadata_path, 'w'))

    return json_data['IpfsHash']


def pin_metadata_to_pinata(image_name, image_metadata_path,):
    print('pin metadata to inata')
    files = [
        ('file', (image_name, open(image_metadata_path, 'rb'), 'application/octet-stream'))
    ]
    headers = {
        'pinata_api_key': "c1833f5262f99427c079",
        'pinata_secret_api_key': "f88d6fe00243844978a00a12924b2cbb57b83d3724ba8f73170d9a8dc5d1e610"
    }

    response = requests.request("POST", url, headers=headers, data=base_metadata, files=files)
    json_data = response.json()
    # print(json_data)

    metadata_hashes[image_name] = json_data['IpfsHash']
    json.dump(metadata_hashes, open('main/nft_services/metadata_hashes.json', 'w'))

    print(" --- All PIN DONE --- ")

    return json_data['IpfsHash']


def handle_transaction(function_name, args, from_addr, private_key):
    w3 = Web3(provider=Web3.HTTPProvider("https://goerli.infura.io/v3/5ff537030ba246268ee78aab10282262"))

    # from_addr = '0x5972dd9171134E3C8C6DB5Cd2681A1201053C2E0'
    contract_addr = '0x8C802e67eA928835f90145B82d749128063252A0'
    abi = json.load(open('main/nft_services/abi.json'))
    # private_key = 'b7dbef1f67bc667650e18039ccfb6095b2f723838b533a7f3f4929535288eaad'

    contract = w3.eth.contract(contract_addr, abi=abi)

    w3.middleware_onion.inject(geth_poa_middleware, layer=0)
    w3.middleware_onion.add(middleware.latest_block_based_cache_middleware)
    w3.middleware_onion.add(middleware.simple_cache_middleware)

    strategy = construct_time_based_gas_price_strategy(10)

    w3.eth.setGasPriceStrategy(strategy)

    addr = Web3.toChecksumAddress(from_addr)
    print(args)

    data = contract.encodeABI(function_name, args=args)
    print(f'addr -> {addr}')
    # print(f'data -> {data}')

    gas      = getattr(contract.functions, function_name)(*args).estimateGas({'from': addr})
    nonce    = Web3.toHex(w3.eth.getTransactionCount(addr))
    gasprice = w3.eth.generateGasPrice()
    txn_fee  = gas * gasprice

    tr = {'to': contract.address,
          'from': from_addr,
          'value': Web3.toHex(0),
          'gasPrice': Web3.toHex(gasprice),
          'nonce': nonce,
          'data': data,
          'gas': gas,
          }

    print(' --- Minting NFT --- ')
    signed = w3.eth.account.sign_transaction(tr, private_key)
    tx = w3.eth.sendRawTransaction(signed.rawTransaction)
    tx_receipt = w3.eth.waitForTransactionReceipt(tx)
    transaction_id = w3.toHex(tx)
    print("TXN RECEIPT: ", tx_receipt)

    print(f"Transaction:\n{tr}\n\nFunction: {function_name}\nArguments:{args}\n\
            Estimated Gas: {gas} * Gasprice: {gasprice} = {txn_fee} Txn Fee")
    print(transaction_id)
    print(' --- Minting NFT Done! --- ')
    return transaction_id
