# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Server::Application.config.secret_key_base = '5b189f13d247b55dda30b9cff43332507c21da6d8e137fa33f557beca3d3859a7f189df2b24adb533e079dc9b99d4f90038b31ac88f70c4308181caa7fbe0807'
