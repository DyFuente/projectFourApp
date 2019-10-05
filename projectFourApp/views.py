# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, EntrySerializer, NotesSerializer
from .models import User, Entry, Notes

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

class NotesViewSet(viewsets.ModelViewSet):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer
