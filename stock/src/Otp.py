from twilio.rest import Client
account_sid ="AC78aeac52ad6b4d54676dbdbffb9fb5f5"
auth_token="3fb02b38bab81ded83aa2ddd9510e041"
Client=Client(account_sid,auth_token)
phone_number=Client.lookups.phone_number("1234567890").fetch()
message=Client.messages.create(
    body="hi ",
    from_=phone_number.phone_number,
    to='+91 9894332382'
)
print(message.sid)