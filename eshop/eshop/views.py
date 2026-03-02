from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    #return HttpResponse("Welcome to the E-Shop!")
    return render(request, 'home.html')