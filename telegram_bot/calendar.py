from telegram import KeyboardButton, ReplyKeyboardMarkup

keyboard_years   = [[KeyboardButton("2022"), KeyboardButton("2023")],
                    [KeyboardButton('⬅ Back')]]

keyboard_months  = [[KeyboardButton('January'), KeyboardButton('February'), KeyboardButton('March')],
                    [KeyboardButton('April'), KeyboardButton('May'), KeyboardButton('June')],
                    [KeyboardButton('July'), KeyboardButton('August'), KeyboardButton('September')],
                    [KeyboardButton('October'), KeyboardButton('November'), KeyboardButton('December')],
                    [KeyboardButton('⬅ Back')]]

keyboard_31_days = [[KeyboardButton('1'), KeyboardButton('2'), KeyboardButton('3'), KeyboardButton('4'),
                     KeyboardButton('5'), KeyboardButton('6'), KeyboardButton('7')],
                    [KeyboardButton('8'), KeyboardButton('9'), KeyboardButton('10'), KeyboardButton('11'),
                     KeyboardButton('12'), KeyboardButton('13'), KeyboardButton('14')],
                    [KeyboardButton('15'), KeyboardButton('16'), KeyboardButton('17'), KeyboardButton('18'),
                     KeyboardButton('19'), KeyboardButton('20'), KeyboardButton('21')],
                    [KeyboardButton('22'), KeyboardButton('23'), KeyboardButton('24'), KeyboardButton('25'),
                     KeyboardButton('26'), KeyboardButton('27'), KeyboardButton('28')],
                    [KeyboardButton('29'), KeyboardButton('30'), KeyboardButton('31')],
                    [KeyboardButton('⬅ Back')]]

keyboard_30_days = [[KeyboardButton('1'), KeyboardButton('2'), KeyboardButton('3'), KeyboardButton('4'),
                     KeyboardButton('5'), KeyboardButton('6'), KeyboardButton('7')],
                    [KeyboardButton('8'), KeyboardButton('9'), KeyboardButton('10'), KeyboardButton('11'),
                     KeyboardButton('12'), KeyboardButton('13'), KeyboardButton('14')],
                    [KeyboardButton('15'), KeyboardButton('16'), KeyboardButton('17'), KeyboardButton('18'),
                     KeyboardButton('19'), KeyboardButton('20'), KeyboardButton('21')],
                    [KeyboardButton('22'), KeyboardButton('23'), KeyboardButton('24'), KeyboardButton('25'),
                     KeyboardButton('26'), KeyboardButton('27'), KeyboardButton('28')],
                    [KeyboardButton('29'), KeyboardButton('30')],
                    [KeyboardButton('⬅ Back')]]

keyboard_28_days = [[KeyboardButton('1'), KeyboardButton('2'), KeyboardButton('3'), KeyboardButton('4'),
                     KeyboardButton('5'), KeyboardButton('6'), KeyboardButton('7')],
                    [KeyboardButton('8'), KeyboardButton('9'), KeyboardButton('10'), KeyboardButton('11'),
                     KeyboardButton('12'), KeyboardButton('13'), KeyboardButton('14')],
                    [KeyboardButton('15'), KeyboardButton('16'), KeyboardButton('17'), KeyboardButton('18'),
                     KeyboardButton('19'), KeyboardButton('20'), KeyboardButton('21')],
                    [KeyboardButton('22'), KeyboardButton('23'), KeyboardButton('24'), KeyboardButton('25'),
                     KeyboardButton('26'), KeyboardButton('27'), KeyboardButton('28')],
                    [KeyboardButton('⬅ Back')]]

reply_markup_years   = ReplyKeyboardMarkup(keyboard_years, True, False)
reply_markup_months  = ReplyKeyboardMarkup(keyboard_months, True, False)
reply_markup_31_days = ReplyKeyboardMarkup(keyboard_31_days, True, False)
reply_markup_30_days = ReplyKeyboardMarkup(keyboard_30_days, True, False)
reply_markup_28_days = ReplyKeyboardMarkup(keyboard_28_days, True, False)


def date(user_msg):

    reply_markup_date     = ''
    selected_month_number = ''

    if user_msg == '2022' or user_msg == '2023':
        reply_markup_date = reply_markup_months

    if user_msg == 'January' or user_msg == 'March' or user_msg == 'May' or user_msg == 'July' or user_msg == 'August' or user_msg == 'October' or user_msg == 'December':
        reply_markup_date = reply_markup_31_days

    elif user_msg == 'April' or user_msg == 'June' or user_msg == 'September' or user_msg == 'November':
        reply_markup_date = reply_markup_30_days

    elif user_msg == 'February':
        reply_markup_date = reply_markup_28_days

    if user_msg == 'January':
        selected_month_number = '01'
    elif user_msg == 'February':
        selected_month_number = '02'
    elif user_msg == 'March':
        selected_month_number = '03'
    elif user_msg == 'April':
        selected_month_number = '04'
    elif user_msg == 'May':
        selected_month_number = '05'
    elif user_msg == 'June':
        selected_month_number = '06'
    elif user_msg == 'July':
        selected_month_number = '07'
    elif user_msg == 'August':
        selected_month_number = '08'
    elif user_msg == 'September':
        selected_month_number = '09'
    elif user_msg == 'October':
        selected_month_number = '10'
    elif user_msg == 'November':
        selected_month_number = '11'
    elif user_msg == 'December':
        selected_month_number = '12'

    return {'reply_markup_date': reply_markup_date, 'selected_month_number': selected_month_number}

