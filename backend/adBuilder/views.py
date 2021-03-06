from django.shortcuts import render
from .serializers import AdBuilderSerializer
from rest_framework import viewsets, generics
from .models import AdBuilder

# Create your views here.

class AdBuilderView(viewsets.ModelViewSet):
    serializer_class = AdBuilderSerializer
    queryset = AdBuilder.objects.all()

class AdBuilderListCreate(generics.ListCreateAPIView):
    serializer_class = AdBuilderSerializer
    queryset = AdBuilder.objects.all()

