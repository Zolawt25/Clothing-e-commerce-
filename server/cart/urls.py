from django.urls import path
from .views import CartListView, CartDeleteView






urlpatterns = [
    path("cart/", CartListView.as_view(), name="cart_list"),
    path("cart/<int:pk>/", CartDeleteView.as_view(), name="cart_delete"),
]
