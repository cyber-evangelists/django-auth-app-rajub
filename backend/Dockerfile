FROM python:3.9-buster

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD python backend/manage.py runserver 0.0.0.0:8000
