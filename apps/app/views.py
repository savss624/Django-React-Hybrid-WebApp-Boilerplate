"""
Views for app.
"""

from django.shortcuts import redirect
from django.views.generic import TemplateView


def domain(request):
    return redirect("dashboard_page")


class Auth(TemplateView):
    """View react app for auth page."""

    template_name = "auth.html"


class Dashboard(TemplateView):
    """View react app for dashboard page."""

    template_name = "dashboard.html"

    def get_context_data(self, **kwargs):
        return {"msg": "Content 1"}
