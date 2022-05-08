from rest_framework import serializers
from .models import AdBuilder

class AdBuilderSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdBuilder
        fields = ('id', 'headline', 'image')