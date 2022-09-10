"""
Views for app.
"""

from django.views.generic import TemplateView

from rest_framework.response import Response
from rest_framework.decorators import api_view


class View(TemplateView):
    """Passing data to frontend directly with Django's template system."""

    template_name = "index.html"

    def get_context_data(self, **kwargs):
        return {"msg": "Data passed by django as a context"}


@api_view(["GET"])
def Api(request):
    """Passing data to frontend with API."""

    return Response({"msg": "Data passed by django as a API response"})
