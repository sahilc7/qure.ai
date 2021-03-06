from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Customer 
from .serializers import *

# Create your views here.
@api_view(['GET'])
def customers_list(request):
  if request.method == 'GET':
      data = []
      nextPage = 1
      previousPage = 1
      customers = Customer.objects.all()
      page = request.GET.get('page', 1)
      paginator = Paginator(customers, 20)
      try:
          data = paginator.page(page)
      except PageNotAnInteger:
          data = paginator.page(1)
      except EmptyPage:
          data = paginator.page(paginator.num_pages)

      serializer = CustomerSerializer(data,context={'request': request} ,many=True)
      if data.has_next():
          nextPage = data.next_page_number()
      if data.has_previous():
          previousPage = data.previous_page_number()

    #   return Response({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/customers/?page=' + str(nextPage), 'prevlink': '/api/customers/?page=' + str(previousPage)})

      return JsonResponse({'data': serializer.data , 'count': paginator.count, 'numpages' : paginator.num_pages, 'nextlink': '/api/customers/?page=' + str(nextPage), 'prevlink': '/api/customers/?page=' + str(previousPage)})
