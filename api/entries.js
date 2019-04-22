---
layout: null
---
var entries = [

{% assign data_collection = site.collections | where: "label", site.year | first %}
{% assign data_list = data_collection.docs %}
{% for data in data_list %}
{
	title: "{{ data.title }}",
	organization_name: "{{ data.organization_name }}",
	url: "{{ data.url }}"
}{% unless forloop.last %},{% endunless %}
{% endfor %}

];
