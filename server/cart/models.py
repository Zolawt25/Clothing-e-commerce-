from django.db import models

# Create your models here.





class CartModel(models.Model):
    productId = models.IntegerField()
    userEmail = models.EmailField(max_length=354)
    img  = models.CharField(max_length=9999)
    brand = models.CharField(max_length=100)
    title = models.CharField(max_length=150)
    rating = models.FloatField()
    price = models.IntegerField()
    description = models.TextField()
    category = models.CharField(max_length=100)
    featured = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title