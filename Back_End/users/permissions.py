from rest_framework import permissions

class IsAdminOrForbidden(permissions.BasePermission):
    def has_permission(self, request, view):
        # Permitir si el usuario está autenticado
        return request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        # Permitir a los administradores editar cualquier usuario
        # O permitir al usuario editar su propio perfil
        return request.user.id_rol == 1 or obj == request.user
