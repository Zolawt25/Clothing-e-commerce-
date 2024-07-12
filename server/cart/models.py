from django.db import models
# import uuid

# Create your models here.





class CartModel(models.Model):
    # id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    productId = models.IntegerField()
    userEmail = models.EmailField(max_length=354)
    img  = models.CharField(max_length=9999)
    title = models.CharField(max_length=150)
    price = models.IntegerField()
    
    def __str__(self):
        return self.title