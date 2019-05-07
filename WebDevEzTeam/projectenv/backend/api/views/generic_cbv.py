from api.models import Supplement, Diets
from api.serializers import SupplementSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.serializers import DietSerializer


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