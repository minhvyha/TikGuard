from django.urls import path
from . import views

urlpatterns = [
    path('list_models/', views.list_models, name='list_models'),
    path('use_model/', views.use_model, name='use_model'),
]
