from api.models import Supplement, Diets, Task, ExerciseCategory, Exercise
from api.serializers import SupplementSerializer, ExerciseCategorySerializer, ExerciseSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.serializers import DietSerializer, TaskSerializer


# Task Create and Get List
class TaskListView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.for_user(self.request.user)

    def get_serializer_class(self):
        return TaskSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class TaskChange(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(id=self.kwargs['pk'])

    def get_serializer_class(self):
        return TaskSerializer


# Works
class SupplementListAllowAny(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Supplement.objects.all()
    serializer_class = SupplementSerializer
    http_method_names = ['get']


# Works
class DietCreateAdmin(generics.CreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Diets.objects.all()
    serializer_class = DietSerializer
    http_method_names = ['post']


# List of all Exercise Categories
class ExerciseCategoryList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = ExerciseCategory.objects.all()
    serializer_class = ExerciseCategorySerializer
    http_method_names = ['get']


class ExerciseCategoryListCreate(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = ExerciseCategory.objects.all()
    serializer_class = ExerciseCategorySerializer
    http_method_names = ['get', 'post']


class ExerciseCategoryInfo(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]

    def get_queryset(self):
        return ExerciseCategory.objects.filter(id=self.kwargs['pk'])

    serializer_class = ExerciseCategorySerializer


class ExerciseCategoryInfoAllowAny(generics.RetrieveAPIView):
    permission_classes = [AllowAny]

    def get_queryset(self):
        return ExerciseCategory.objects.filter(id=self.kwargs['pk'])

    serializer_class = ExerciseCategorySerializer
