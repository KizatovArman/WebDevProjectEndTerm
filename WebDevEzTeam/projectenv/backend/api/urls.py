from django.urls import path
from api import views

urlpatterns =[
    # for all users
    path('login/', views.login),
    path('logout/', views.logout),
    path('register/', views.UserCreate.as_view()),
    path('supplements/', views.SupplementListAllowAny.as_view()),
    path('diets/', views.DietListAllowAny.as_view()),
    path('exercise_categories/', views.ExerciseCategoryList.as_view()),
    path('exercise_categories/<int:pk>/', views.ExerciseCategoryInfoAllowAny.as_view()),
    # for admin
    path('users/', views.UserList.as_view()),
    path('exercise_category/', views.ExerciseCategoryListCreate.as_view()),
    path('exercise_category/<int:pk>/', views.ExerciseCategoryInfo.as_view()),
    path('diet/', views.DietCreateAdmin.as_view()),
    path('diet/<int:pk>/', views.diet_by_id),
    # for authorized users
    path('profile/<int:pk>/', views.get_update_user_profile),
    path('tasks/', views.TaskListView.as_view()),
    path('tasks/<int:pk>/', views.TaskChange.as_view()),
]
