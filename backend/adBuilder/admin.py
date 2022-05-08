from django.contrib import admin
from .models import AdBuilder

# Register your models here.

class AdBuilderAdmin(admin.ModelAdmin):
    list = ('headline', 'image')


admin.site.register(AdBuilder, AdBuilderAdmin)
