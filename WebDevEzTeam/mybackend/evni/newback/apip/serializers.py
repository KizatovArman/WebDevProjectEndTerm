from rest_framework import serializers
from .models import TaskList, Task, Exercise, ExercisesCategory
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class TaskListModelSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = TaskList
        fields = ('id', 'name', 'created_by')


class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_at = serializers.DateTimeField()
    due_on = serializers.DateTimeField()
    status = serializers.CharField()
    task_list = TaskListModelSerializer()


class ExerciseCategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        exercise_category = ExercisesCategory(**validated_data)
        exercise_category.save()
        return exercise_category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
