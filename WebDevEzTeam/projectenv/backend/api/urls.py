from django.urls import path
from api import views

urlpatterns =[
    # for all users
    path('supplements/', views.SupplementListAllowAny.as_view()),
    path('diets/', views.DietListAllowAny.as_view()),
    # for admin
    path('diet/', views.DietCreateAdmin.as_view()),
]