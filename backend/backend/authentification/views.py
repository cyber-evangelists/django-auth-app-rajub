import json

from django.http import JsonResponse, HttpResponse

from .config import auth


def login(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body['email']
        password = body['password']

        try:
            user = auth.sign_in_with_email_and_password(email, password)
            return JsonResponse({'status': 'success', 'user': user})
        except:
            message = 'Invalid credentials. Please try again.'
            return JsonResponse({'status': 'error', 'message': message}, status=403)
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)


def register(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body['email']
        password = body['password']

        auth.create_user_with_email_and_password(email, password)
        return HttpResponse(status=200)

    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)


def forget_password():
    pass
