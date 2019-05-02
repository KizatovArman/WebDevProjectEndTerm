from django.urls import path
from apip import views

urlpatterns =[
    path('exercises_categories/', views.ExerciseCategoryListAllowAny.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    path('users/', views.UserList.as_view()),
]