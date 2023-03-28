import pyrebase

# Create your views here.
config = {
  "apiKey": "AIzaSyDpjLPwqt3HkVg4zG0L27nnolHlB-LM80o",
  "authDomain": "signin-1a18c.firebaseapp.com",
  "databaseURL": "https://signin-1a18c-default-rtdb.firebaseio.com",
  "projectId": "signin-1a18c",
  "storageBucket": "signin-1a18c.appspot.com",
  "messagingSenderId": "339089717882",
  "appId": "1:339089717882:web:7dae02c38783f65e13d9c3",
  "measurementId": "G-3LF5WSXHC5"
}
firebase=pyrebase.initialize_app(config)
auth=firebase.auth()