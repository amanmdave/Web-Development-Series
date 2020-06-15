from django.shortcuts import render, HttpResponse
from .models import *
from django.shortcuts import Http404


def index(request):
    food_items = FoodItem.objects.all()
    context = {'food_items': food_items}
    return render(request, 'foodie/index.html', context=context)


def detail(request, pk):
    try:
        food_item = FoodItem.objects.get(pk=pk)
    except FoodItem.DoesNotExist:
        raise Http404
    context = {'food_item': food_item}
    return render(request, 'foodie/detail.html', context=context)
