from apip.models import ExercisesCategory, Exercise, TaskList
from apip.serializers import ExerciseCategorySerializer, TaskListModelSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny,IsAdminUser
from rest_framework import mixins


class TasklistList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return TaskList.objects.for_user(self.request.user)

    def get_serializer_class(self):
        return TaskListModelSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class TasklistInfo(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListModelSerializer


class ExerciseCategoryListAllowAny(generics.ListAPIView):
    # permission_classes = AllowAny
    queryset = ExercisesCategory.objects.all()
    serializer_class = ExerciseCategorySerializer
    http_method_names = ['get']


# class ExerciseCategoryListAdmins(generics.ListCreateAPIView):
#     permission_classes = [IsAuthenticated, IsAdminUser]
#
#     def get_queryset(self):
#         return ExercisesCategory.objects.all()
#
#     def get_serializer_class(self):
#         return ExerciseCategorySerializer
#
#     def perform_create(self, serializer):
#         serializer.save()

class ExerciseCategoryInfo(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser, IsAuthenticated]
    queryset = ExercisesCategory.objects.all()
    serializer_class = ExerciseCategorySerializer
