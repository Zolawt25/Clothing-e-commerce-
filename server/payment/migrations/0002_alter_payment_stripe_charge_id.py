# Generated by Django 5.0.6 on 2024-06-11 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("payment", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="payment",
            name="stripe_charge_id",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]