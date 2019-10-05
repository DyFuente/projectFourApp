from rest_framework import serializers
from .models import User, Entry, Notes

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','userName','email']

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id','medium','title','art', 'user']

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ['id','name','comment','entry']