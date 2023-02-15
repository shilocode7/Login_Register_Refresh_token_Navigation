from django.urls import path
from django.contrib import admin
from . import views
from rest_framework_simplejwt.views import (TokenRefreshView,)


urlpatterns = [
    path('test/', views.test),
    path('student/', views.StudentView.as_view()),
    path('student/<pk>', views.StudentView.as_view()),
    path('login/', views.MyTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    path('regi/', views.register),
    path('profile/', views.ProfileView.as_view()),
    path('profile/<pk>', views.ProfileView.as_view()),
    # path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
]
