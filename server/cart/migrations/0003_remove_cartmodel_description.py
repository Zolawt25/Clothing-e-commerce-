# Generated by Django 5.0.6 on 2024-05-15 06:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("cart", "0002_remove_cartmodel_brand_remove_cartmodel_category_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="cartmodel",
            name="description",
        ),
    ]