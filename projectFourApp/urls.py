from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'entry', views.EntryViewSet)
router.register(r'notes', views.NotesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]