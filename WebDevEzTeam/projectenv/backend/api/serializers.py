from rest_framework import serializers
from .models import Diets, Supplement, Task
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(validators=[UniqueValidator(queryset=User.objects.all())], min_length=1)
    email = serializers.CharField(max_length=300)
    password = serializers.CharField(min_length=8)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'is_superuser')


# Task Serializer
class TaskSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    created_at = serializers.DateTimeField()
    status = serializers.CharField()
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = Task
        fields = (
            'id',
            'name',
            'created_at',
            'status',
            'created_by'
        )


# Supplement Serializer
class SupplementSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField()

    def create(self, validated_data):
        supplement = Supplement(**validated_data)
        supplement.save()
        return supplement

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.title)
        instance.save()
        return instance


# Diet Serializer
class DietSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField()

    class Meta:
        model = Diets
        fields = (
            'id',
            'title',
            'description'
        )