from django.shortcuts import render
from .models import Product
from .Serializers import ProductSerializer
from rest_framework import generics
# Create your views here.




class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer