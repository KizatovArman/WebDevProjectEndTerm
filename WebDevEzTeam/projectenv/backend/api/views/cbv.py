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


# Class Based View
class DietListAllowAny(APIView):
    def get(self, request):
        diets = Diets.objects.all()
        serializer = DietSerializer(diets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# class
