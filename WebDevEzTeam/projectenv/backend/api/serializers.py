from rest_framework import serializers
from .models import Diets, Supplement
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


#SupplementSerializer
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

#DietSerializer
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