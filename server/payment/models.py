from django.db import models
# import uuid







class Payment(models.Model):
    # id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    amount = models.IntegerField()
    currency = models.CharField(max_length=10)
    stripe_charge_id = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)