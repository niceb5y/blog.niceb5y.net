---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
description: {{ if eq .Title .Site.Title }}{{ .Site.Params.description }}{{ else }}{{ .Summary }}...{{ end }}
---

