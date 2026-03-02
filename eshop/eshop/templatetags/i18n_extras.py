from django import template
from django.conf import settings

register = template.Library()

@register.simple_tag(takes_context=True)
def switch_language_url(context, lang_code):
    """
    Return the current path but with the language prefix replaced by lang_code.
    Works with i18n_patterns where URLs look like /en/... or /da/...
    """
    request = context['request']
    path = request.path          # e.g. "/da/catalogue/" or "/en/catalogue/"
    parts = path.split('/')      # ["", "da", "catalogue", ""]

    lang_codes = {code for code, _ in settings.LANGUAGES}

    if len(parts) > 1 and parts[1] in lang_codes:
        # Replace existing prefix
        parts[1] = lang_code
    else:
        # No prefix → insert one
        parts.insert(1, lang_code)

    # Rebuild path, keeping leading slash and trailing slash if it existed
    new_path = '/'.join(parts)
    if not new_path.startswith('/'):
        new_path = '/' + new_path

    # Preserve query string if present
    query = request.META.get('QUERY_STRING')
    if query:
        new_path = f"{new_path}?{query}"

    return new_path
