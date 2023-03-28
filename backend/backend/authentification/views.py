from django.http import JsonResponse
from .config import auth

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        try:
            user = auth.sign_in_with_email_and_password(email, password)
            return JsonResponse({'status': 'success', 'user': user})
        except:
            message = 'Invalid credentials. Please try again.'
            return JsonResponse({'status': 'error', 'message': message})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request'})