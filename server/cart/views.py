from django.shortcuts import render
from .models import CartModel
from .serializers import CartSerializer
from rest_framework import generics
# Create your views here.




class CartListView(generics.ListCreateAPIView):
    queryset = CartModel.objects.all()
    serializer_class = CartSerializer
    
class CartDeleteView(generics.DestroyAPIView):
    queryset = CartModel.objects.all()
    serializer_class = CartSerializer