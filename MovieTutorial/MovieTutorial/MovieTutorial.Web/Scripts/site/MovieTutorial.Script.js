(function() {
	'use strict';
	var $asm = {};
	global.MovieTutorial = global.MovieTutorial || {};
	global.MovieTutorial.Administration = global.MovieTutorial.Administration || {};
	global.MovieTutorial.Common = global.MovieTutorial.Common || {};
	global.MovieTutorial.Membership = global.MovieTutorial.Membership || {};
	global.MovieTutorial.MovieDB = global.MovieTutorial.MovieDB || {};
	global.MovieTutorial.Northwind = global.MovieTutorial.Northwind || {};
	ss.initAssembly($asm, 'MovieTutorial.Script');
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.ScriptInitialization
	var $MovieTutorial_ScriptInitialization = function() {
	};
	$MovieTutorial_ScriptInitialization.__typeName = 'MovieTutorial.ScriptInitialization';
	global.MovieTutorial.ScriptInitialization = $MovieTutorial_ScriptInitialization;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.LanguageDialog
	var $MovieTutorial_Administration_LanguageDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Administration_LanguageDialog.__typeName = 'MovieTutorial.Administration.LanguageDialog';
	global.MovieTutorial.Administration.LanguageDialog = $MovieTutorial_Administration_LanguageDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.LanguageForm
	var $MovieTutorial_Administration_LanguageForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Administration_LanguageForm.__typeName = 'MovieTutorial.Administration.LanguageForm';
	global.MovieTutorial.Administration.LanguageForm = $MovieTutorial_Administration_LanguageForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.LanguageGrid
	var $MovieTutorial_Administration_LanguageGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Administration_LanguageGrid.__typeName = 'MovieTutorial.Administration.LanguageGrid';
	global.MovieTutorial.Administration.LanguageGrid = $MovieTutorial_Administration_LanguageGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.LanguageService
	var $MovieTutorial_Administration_LanguageService = function() {
	};
	$MovieTutorial_Administration_LanguageService.__typeName = 'MovieTutorial.Administration.LanguageService';
	$MovieTutorial_Administration_LanguageService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Create', request, onSuccess, options);
	};
	$MovieTutorial_Administration_LanguageService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Update', request, onSuccess, options);
	};
	$MovieTutorial_Administration_LanguageService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Administration_LanguageService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Administration_LanguageService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Language/List', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.LanguageService = $MovieTutorial_Administration_LanguageService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.PermissionCheckEditor
	var $MovieTutorial_Administration_PermissionCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$MovieTutorial_Administration_PermissionCheckEditor.__typeName = 'MovieTutorial.Administration.PermissionCheckEditor';
	global.MovieTutorial.Administration.PermissionCheckEditor = $MovieTutorial_Administration_PermissionCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.PermissionModuleEditor
	var $MovieTutorial_Administration_PermissionModuleEditor = function(hidden) {
		ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]).call(this, hidden, null);
		var modules = {};
		var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
		for (var i = 0; i < permissions.length; i++) {
			var k = permissions[i];
			var idx1 = k.indexOf(String.fromCharCode(58));
			if (idx1 <= 0) {
				continue;
			}
			var idx2 = k.indexOf(String.fromCharCode(58), idx1 + 1);
			if (idx2 <= 0) {
				continue;
			}
			var module = k.substr(0, idx1);
			modules[module] = true;
		}
		var othersModule = false;
		for (var $t1 = 0; $t1 < permissions.length; $t1++) {
			var k1 = permissions[$t1];
			var idx11 = k1.indexOf(String.fromCharCode(58));
			if (idx11 < 0 && !ss.isValue(modules[k1])) {
				othersModule = true;
				break;
			}
		}
		var moduleList = [];
		ss.arrayAddRange(moduleList, Object.keys(modules));
		if (othersModule) {
			moduleList.push('Common');
		}
		for (var $t2 = 0; $t2 < moduleList.length; $t2++) {
			var k2 = moduleList[$t2];
			this.addItem(k2, k2, k2, false);
		}
	};
	$MovieTutorial_Administration_PermissionModuleEditor.__typeName = 'MovieTutorial.Administration.PermissionModuleEditor';
	global.MovieTutorial.Administration.PermissionModuleEditor = $MovieTutorial_Administration_PermissionModuleEditor;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RoleCheckEditor
	var $MovieTutorial_Administration_RoleCheckEditor = function(div) {
		this.$containsText = null;
		ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]).call(this, div, null);
	};
	$MovieTutorial_Administration_RoleCheckEditor.__typeName = 'MovieTutorial.Administration.RoleCheckEditor';
	global.MovieTutorial.Administration.RoleCheckEditor = $MovieTutorial_Administration_RoleCheckEditor;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RoleDialog
	var $MovieTutorial_Administration_RoleDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Administration_RoleDialog.__typeName = 'MovieTutorial.Administration.RoleDialog';
	global.MovieTutorial.Administration.RoleDialog = $MovieTutorial_Administration_RoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RoleForm
	var $MovieTutorial_Administration_RoleForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Administration_RoleForm.__typeName = 'MovieTutorial.Administration.RoleForm';
	global.MovieTutorial.Administration.RoleForm = $MovieTutorial_Administration_RoleForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RoleGrid
	var $MovieTutorial_Administration_RoleGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Administration_RoleGrid.__typeName = 'MovieTutorial.Administration.RoleGrid';
	global.MovieTutorial.Administration.RoleGrid = $MovieTutorial_Administration_RoleGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RolePermissionDialog
	var $MovieTutorial_Administration_RolePermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $MovieTutorial_Administration_PermissionCheckEditor(this.byId$1('Permissions'));
		$MovieTutorial_Administration_RolePermissionService.list({ RoleID: this.options.roleID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
	};
	$MovieTutorial_Administration_RolePermissionDialog.__typeName = 'MovieTutorial.Administration.RolePermissionDialog';
	global.MovieTutorial.Administration.RolePermissionDialog = $MovieTutorial_Administration_RolePermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RolePermissionService
	var $MovieTutorial_Administration_RolePermissionService = function() {
	};
	$MovieTutorial_Administration_RolePermissionService.__typeName = 'MovieTutorial.Administration.RolePermissionService';
	$MovieTutorial_Administration_RolePermissionService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/RolePermission/Update', request, onSuccess, options);
	};
	$MovieTutorial_Administration_RolePermissionService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/RolePermission/List', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.RolePermissionService = $MovieTutorial_Administration_RolePermissionService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.RoleService
	var $MovieTutorial_Administration_RoleService = function() {
	};
	$MovieTutorial_Administration_RoleService.__typeName = 'MovieTutorial.Administration.RoleService';
	$MovieTutorial_Administration_RoleService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Create', request, onSuccess, options);
	};
	$MovieTutorial_Administration_RoleService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Update', request, onSuccess, options);
	};
	$MovieTutorial_Administration_RoleService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Administration_RoleService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Administration_RoleService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Role/List', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.RoleService = $MovieTutorial_Administration_RoleService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.TranslationGrid
	var $MovieTutorial_Administration_TranslationGrid = function(container) {
		this.$searchText = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$targetLanguageKey = null;
		this.$hasChanges = false;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
		this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', ss.mkdel(this, function(e) {
			var value = Q.trimToNull($(e.target).val());
			if (value === '') {
				value = null;
			}
			this.view.getItemById($(e.target).data('key')).CustomText = value;
			this.$hasChanges = true;
		}));
	};
	$MovieTutorial_Administration_TranslationGrid.__typeName = 'MovieTutorial.Administration.TranslationGrid';
	global.MovieTutorial.Administration.TranslationGrid = $MovieTutorial_Administration_TranslationGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.TranslationService
	var $MovieTutorial_Administration_TranslationService = function() {
	};
	$MovieTutorial_Administration_TranslationService.__typeName = 'MovieTutorial.Administration.TranslationService';
	$MovieTutorial_Administration_TranslationService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Translation/List', request, onSuccess, options);
	};
	$MovieTutorial_Administration_TranslationService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/Translation/Update', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.TranslationService = $MovieTutorial_Administration_TranslationService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserDialog
	var $MovieTutorial_Administration_UserDialog = function() {
		this.$form = null;
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
		this.$form = new $MovieTutorial_Administration_UserForm(this.get_idPrefix());
		Serenity.VX.addValidationRule(this.$form.get_password(), this.uniqueName, ss.mkdel(this, function(e) {
			if (this.$form.get_password().get_value().length < 7) {
				return 'Password must be at least 7 characters!';
			}
			return null;
		}));
		Serenity.VX.addValidationRule(this.$form.get_passwordConfirm(), this.uniqueName, ss.mkdel(this, function(e1) {
			if (!ss.referenceEquals(this.$form.get_password().get_value(), this.$form.get_passwordConfirm().get_value())) {
				return "The passwords entered doesn't match!";
			}
			return null;
		}));
	};
	$MovieTutorial_Administration_UserDialog.__typeName = 'MovieTutorial.Administration.UserDialog';
	global.MovieTutorial.Administration.UserDialog = $MovieTutorial_Administration_UserDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserForm
	var $MovieTutorial_Administration_UserForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Administration_UserForm.__typeName = 'MovieTutorial.Administration.UserForm';
	global.MovieTutorial.Administration.UserForm = $MovieTutorial_Administration_UserForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserGrid
	var $MovieTutorial_Administration_UserGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Administration_UserGrid.__typeName = 'MovieTutorial.Administration.UserGrid';
	global.MovieTutorial.Administration.UserGrid = $MovieTutorial_Administration_UserGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserPermissionDialog
	var $MovieTutorial_Administration_UserPermissionDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $MovieTutorial_Administration_PermissionCheckEditor(this.byId$1('Permissions'));
		$MovieTutorial_Administration_UserPermissionService.list({ UserID: this.options.userID, Module: null, Submodule: null }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(response.Entities);
		}), null);
	};
	$MovieTutorial_Administration_UserPermissionDialog.__typeName = 'MovieTutorial.Administration.UserPermissionDialog';
	global.MovieTutorial.Administration.UserPermissionDialog = $MovieTutorial_Administration_UserPermissionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserPermissionService
	var $MovieTutorial_Administration_UserPermissionService = function() {
	};
	$MovieTutorial_Administration_UserPermissionService.__typeName = 'MovieTutorial.Administration.UserPermissionService';
	$MovieTutorial_Administration_UserPermissionService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserPermission/Update', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserPermissionService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserPermission/List', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserPermissionService.listPermissionKeys = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserPermission/ListPermissionKeys', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.UserPermissionService = $MovieTutorial_Administration_UserPermissionService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserRoleDialog
	var $MovieTutorial_Administration_UserRoleDialog = function(opt) {
		this.$permissions = null;
		ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).$ctor1.call(this, opt);
		this.$permissions = new $MovieTutorial_Administration_RoleCheckEditor(this.byId$1('Roles'));
		$MovieTutorial_Administration_UserRoleService.list({ UserID: this.options.userID }, ss.mkdel(this, function(response) {
			this.$permissions.set_value(Enumerable.from(response.Entities).select(function(x) {
				return x.toString();
			}).toArray());
		}), null);
	};
	$MovieTutorial_Administration_UserRoleDialog.__typeName = 'MovieTutorial.Administration.UserRoleDialog';
	global.MovieTutorial.Administration.UserRoleDialog = $MovieTutorial_Administration_UserRoleDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserRoleService
	var $MovieTutorial_Administration_UserRoleService = function() {
	};
	$MovieTutorial_Administration_UserRoleService.__typeName = 'MovieTutorial.Administration.UserRoleService';
	$MovieTutorial_Administration_UserRoleService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserRole/Update', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserRoleService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/UserRole/List', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.UserRoleService = $MovieTutorial_Administration_UserRoleService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Administration.UserService
	var $MovieTutorial_Administration_UserService = function() {
	};
	$MovieTutorial_Administration_UserService.__typeName = 'MovieTutorial.Administration.UserService';
	$MovieTutorial_Administration_UserService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Create', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Update', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserService.undelete = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Undelete', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Administration_UserService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Administration/User/List', request, onSuccess, options);
	};
	global.MovieTutorial.Administration.UserService = $MovieTutorial_Administration_UserService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Common.CascadedEditorHelper
	var $MovieTutorial_Common_CascadedEditorHelper$2 = function(TWidget, TParentWidget) {
		var $type = function(widget, getParentValue, updateItems) {
			this.$widget = null;
			this.$updateItems = null;
			this.$parentID = null;
			this.$parentValue = null;
			this.$getParentValue = null;
			this.$widget = widget;
			this.$updateItems = updateItems;
			this.$getParentValue = getParentValue;
		};
		ss.registerGenericClassInstance($type, $MovieTutorial_Common_CascadedEditorHelper$2, [TWidget, TParentWidget], {
			bindToParent: function() {
				if (Q.isEmptyOrNull(this.get_parentID())) {
					return;
				}
				var parent = Serenity.WX.tryGetWidget(TParentWidget).call(null, Q.findElementWithRelativeId(this.$widget.get_element(), this.get_parentID()));
				if (ss.isValue(parent)) {
					parent.get_element().bind('change.' + this.$widget.get_uniqueName(), ss.mkdel(this, function() {
						this.set_parentValue(this.$getParentValue(parent));
					}));
				}
			},
			unbindFromParent: function() {
				if (Q.isEmptyOrNull(this.get_parentID())) {
					return;
				}
				var parent = Serenity.WX.tryGetWidget(TParentWidget).call(null, Q.findElementWithRelativeId(this.$widget.get_element(), this.get_parentID()));
				if (ss.isValue(parent)) {
					parent.get_element().unbind('.' + this.$widget.get_uniqueName());
				}
			},
			get_parentID: function() {
				return this.$parentID;
			},
			set_parentID: function(value) {
				if (!ss.referenceEquals(this.$parentID, value)) {
					this.unbindFromParent();
					this.$parentID = value;
					this.bindToParent();
					this.$updateItems();
				}
			},
			get_parentValue: function() {
				return this.$parentValue;
			},
			set_parentValue: function(value) {
				if (!ss.referenceEquals(ss.coalesce(this.$parentValue, '').toString(), ss.coalesce(value, '').toString())) {
					this.$parentValue = value;
					this.$updateItems();
				}
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$MovieTutorial_Common_CascadedEditorHelper$2.__typeName = 'MovieTutorial.Common.CascadedEditorHelper$2';
	ss.initGenericClass($MovieTutorial_Common_CascadedEditorHelper$2, $asm, 2);
	global.MovieTutorial.Common.CascadedEditorHelper$2 = $MovieTutorial_Common_CascadedEditorHelper$2;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Common.GridEditorBase
	var $MovieTutorial_Common_GridEditorBase$1 = function(TEntity) {
		var $type = function(container) {
			this.$nextId = 1;
			ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]).call(this, container);
		};
		ss.registerGenericClassInstance($type, $MovieTutorial_Common_GridEditorBase$1, [TEntity], {
			id: function(entity) {
				return ss.cast(entity.__id, ss.Int32);
			},
			save: function(opt, callback) {
				var request = opt.request;
				var row = Q$Externals.deepClone(request.Entity);
				var id = ss.cast(row.__id, ss.Int32);
				if (ss.isNullOrUndefined(id)) {
					row.__id = this.$nextId++;
				}
				if (!this.validateEntity(row, id)) {
					return;
				}
				var items = ss.arrayClone(this.view.getItems());
				if (ss.isNullOrUndefined(id)) {
					items.push(row);
				}
				else {
					var index = Enumerable.from(items).indexOf(ss.mkdel(this, function(x) {
						return this.id(x) === ss.unbox(id);
					}));
					items[index] = row;
				}
				this.setEntities(items);
				callback({});
			},
			deleteEntity: function(id) {
				this.view.deleteItem(id);
				return true;
			},
			validateEntity: function(row, id) {
				return true;
			},
			setEntities: function(items) {
				this.view.setItems(items, true);
			},
			getNewEntity: function() {
				return ss.createInstance(TEntity);
			},
			getButtons: function() {
				var $t1 = [];
				$t1.push({ title: this.getAddButtonCaption(), cssClass: 'add-button', onClick: ss.mkdel(this, function() {
					this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
						var dialog = ss.cast(dlg, ss.makeGenericType($MovieTutorial_Common_GridEditorDialog$1, [TEntity]));
						dialog.set_onSave(ss.mkdel(this, this.save));
						dialog.loadEntityAndOpenDialog(this.getNewEntity());
					}));
				}) });
				return $t1;
			},
			editItem: function(entityOrId) {
				var id = ss.unbox(Serenity.IdExtensions.toInt32(entityOrId));
				var item = this.view.getItemById(id);
				this.createEntityDialog(this.getItemType(), ss.mkdel(this, function(dlg) {
					var dialog = ss.cast(dlg, ss.makeGenericType($MovieTutorial_Common_GridEditorDialog$1, [TEntity]));
					dialog.set_onDelete(ss.mkdel(this, function(opt, callback) {
						if (!this.deleteEntity(id)) {
							return;
						}
						callback({});
					}));
					dialog.set_onSave(ss.mkdel(this, this.save));
					dialog.loadEntityAndOpenDialog(item);
				}));
			},
			getEditValue: function(property, target) {
				target[property.name] = this.get_value();
			},
			setEditValue: function(source, property) {
				this.set_value(ss.cast(source[property.name], Array));
			},
			get_value: function() {
				return Enumerable.from(this.view.getItems()).select(function(x) {
					var y = Q$Externals.deepClone(x);
					delete y['__id'];
					return y;
				}).toArray();
			},
			set_value: function(value) {
				this.view.setItems(Enumerable.from(value || []).select(ss.mkdel(this, function(x) {
					var y = Q$Externals.deepClone(x);
					y.__id = this.$nextId++;
					return y;
				})).toArray(), true);
			},
			getGridCanLoad: function() {
				return false;
			},
			usePager: function() {
				return false;
			},
			getInitialTitle: function() {
				return null;
			},
			createQuickSearchInput: function() {
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityGrid$1, [TEntity]);
		}, function() {
			return [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue];
		});
		ss.setMetadata($type, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$MovieTutorial_Common_GridEditorBase$1.__typeName = 'MovieTutorial.Common.GridEditorBase$1';
	ss.initGenericClass($MovieTutorial_Common_GridEditorBase$1, $asm, 1);
	global.MovieTutorial.Common.GridEditorBase$1 = $MovieTutorial_Common_GridEditorBase$1;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Common.GridEditorDialog
	var $MovieTutorial_Common_GridEditorDialog$1 = function(TEntity) {
		var $type = function() {
			this.$8$OnSaveField = null;
			this.$8$OnDeleteField = null;
			ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]).call(this);
		};
		ss.registerGenericClassInstance($type, $MovieTutorial_Common_GridEditorDialog$1, [TEntity], {
			destroy: function() {
				this.set_onSave(null);
				this.set_onDelete(null);
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.destroy.call(this);
			},
			updateInterface: function() {
				ss.makeGenericType(Serenity.EntityDialog$2, [TEntity, Object]).prototype.updateInterface.call(this);
				// apply changes button doesn't work properly with in-memory grids yet
				if (ss.isValue(this.applyChangesButton)) {
					this.applyChangesButton.hide();
				}
			},
			saveHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onSave(), null)) {
					this.get_onSave()(options, callback);
				}
			},
			deleteHandler: function(options, callback) {
				if (!ss.staticEquals(this.get_onDelete(), null)) {
					this.get_onDelete()(options, callback);
				}
			},
			get_onSave: function() {
				return this.$8$OnSaveField;
			},
			set_onSave: function(value) {
				this.$8$OnSaveField = value;
			},
			get_onDelete: function() {
				return this.$8$OnDeleteField;
			},
			set_onDelete: function(value) {
				this.$8$OnDeleteField = value;
			}
		}, function() {
			return ss.makeGenericType(Serenity.EntityDialog$1, [TEntity]);
		}, function() {
			return [Serenity.IDialog, Serenity.IEditDialog];
		});
		ss.setMetadata($type, { attr: [new Serenity.IdPropertyAttribute('__id')] });
		return $type;
	};
	$MovieTutorial_Common_GridEditorDialog$1.__typeName = 'MovieTutorial.Common.GridEditorDialog$1';
	ss.initGenericClass($MovieTutorial_Common_GridEditorDialog$1, $asm, 1);
	global.MovieTutorial.Common.GridEditorDialog$1 = $MovieTutorial_Common_GridEditorDialog$1;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Common.LanguageSelection
	var $MovieTutorial_Common_LanguageSelection = function(hidden, currentLanguage) {
		this.$currentLanguage = null;
		ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]).call(this, hidden);
		this.$currentLanguage = ss.coalesce(currentLanguage, 'en');
		this.set_value('en');
		var self = this;
		Serenity.WX.changeSelect2(this, function(e) {
			$.cookie('LanguagePreference', self.get_value(), { path: Q$Config.applicationPath });
			window.location.reload(true);
		});
	};
	$MovieTutorial_Common_LanguageSelection.__typeName = 'MovieTutorial.Common.LanguageSelection';
	global.MovieTutorial.Common.LanguageSelection = $MovieTutorial_Common_LanguageSelection;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Common.SidebarSearch
	var $MovieTutorial_Common_SidebarSearch = function(input, menuUL) {
		this.$menuUL = null;
		Serenity.Widget.call(this, input);
		var self = this;
		var $t1 = Serenity.QuickSearchInputOptions.$ctor();
		$t1.onSearch = function(field, text, success) {
			self.$updateMatchFlags(text);
			success(true);
		};
		new Serenity.QuickSearchInput(input, $t1);
		this.$menuUL = menuUL;
	};
	$MovieTutorial_Common_SidebarSearch.__typeName = 'MovieTutorial.Common.SidebarSearch';
	global.MovieTutorial.Common.SidebarSearch = $MovieTutorial_Common_SidebarSearch;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Membership.LoginForm
	var $MovieTutorial_Membership_LoginForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Membership_LoginForm.__typeName = 'MovieTutorial.Membership.LoginForm';
	global.MovieTutorial.Membership.LoginForm = $MovieTutorial_Membership_LoginForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Membership.LoginPanel
	var $MovieTutorial_Membership_LoginPanel = function() {
		ss.makeGenericType(Serenity.PropertyDialog$1, [Object]).call(this);
		this.byId$1('LoginButton').click(ss.thisFix(ss.mkdel(this, function(s, e) {
			e.preventDefault();
			if (!this.validateForm()) {
				return;
			}
			var request = this.getSaveEntity();
			Q.serviceCall({
				url: Q.resolveUrl('~/Account/Login'),
				request: request,
				onSuccess: function(response) {
					var q = Q$Externals.parseQueryString();
					var $t1 = q['returnUrl'];
					if (ss.isNullOrUndefined($t1)) {
						$t1 = q['ReturnUrl'];
					}
					var r = $t1;
					if (!ss.isNullOrEmptyString(r)) {
						window.location.href = r;
					}
					else {
						window.location.href = Q.resolveUrl('~/');
					}
				}
			});
		})));
	};
	$MovieTutorial_Membership_LoginPanel.__typeName = 'MovieTutorial.Membership.LoginPanel';
	global.MovieTutorial.Membership.LoginPanel = $MovieTutorial_Membership_LoginPanel;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.Gender
	var $MovieTutorial_MovieDB_Gender = function() {
	};
	$MovieTutorial_MovieDB_Gender.__typeName = 'MovieTutorial.MovieDB.Gender';
	global.MovieTutorial.MovieDB.Gender = $MovieTutorial_MovieDB_Gender;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.GenreDialog
	var $MovieTutorial_MovieDB_GenreDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_MovieDB_GenreDialog.__typeName = 'MovieTutorial.MovieDB.GenreDialog';
	global.MovieTutorial.MovieDB.GenreDialog = $MovieTutorial_MovieDB_GenreDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.GenreForm
	var $MovieTutorial_MovieDB_GenreForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_MovieDB_GenreForm.__typeName = 'MovieTutorial.MovieDB.GenreForm';
	global.MovieTutorial.MovieDB.GenreForm = $MovieTutorial_MovieDB_GenreForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.GenreGrid
	var $MovieTutorial_MovieDB_GenreGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_MovieDB_GenreGrid.__typeName = 'MovieTutorial.MovieDB.GenreGrid';
	global.MovieTutorial.MovieDB.GenreGrid = $MovieTutorial_MovieDB_GenreGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.GenreService
	var $MovieTutorial_MovieDB_GenreService = function() {
	};
	$MovieTutorial_MovieDB_GenreService.__typeName = 'MovieTutorial.MovieDB.GenreService';
	$MovieTutorial_MovieDB_GenreService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Genre/Create', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_GenreService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Genre/Update', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_GenreService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Genre/Delete', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_GenreService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Genre/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_GenreService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Genre/List', request, onSuccess, options);
	};
	global.MovieTutorial.MovieDB.GenreService = $MovieTutorial_MovieDB_GenreService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieCastDialog
	var $MovieTutorial_MovieDB_MovieCastDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_MovieDB_MovieCastDialog.__typeName = 'MovieTutorial.MovieDB.MovieCastDialog';
	global.MovieTutorial.MovieDB.MovieCastDialog = $MovieTutorial_MovieDB_MovieCastDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieCastEditor
	var $MovieTutorial_MovieDB_MovieCastEditor = function(container) {
		ss.makeGenericType($MovieTutorial_Common_GridEditorBase$1, [Object]).call(this, container);
	};
	$MovieTutorial_MovieDB_MovieCastEditor.__typeName = 'MovieTutorial.MovieDB.MovieCastEditor';
	global.MovieTutorial.MovieDB.MovieCastEditor = $MovieTutorial_MovieDB_MovieCastEditor;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieCastForm
	var $MovieTutorial_MovieDB_MovieCastForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_MovieDB_MovieCastForm.__typeName = 'MovieTutorial.MovieDB.MovieCastForm';
	global.MovieTutorial.MovieDB.MovieCastForm = $MovieTutorial_MovieDB_MovieCastForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieCastGrid
	var $MovieTutorial_MovieDB_MovieCastGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_MovieDB_MovieCastGrid.__typeName = 'MovieTutorial.MovieDB.MovieCastGrid';
	global.MovieTutorial.MovieDB.MovieCastGrid = $MovieTutorial_MovieDB_MovieCastGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieCastService
	var $MovieTutorial_MovieDB_MovieCastService = function() {
	};
	$MovieTutorial_MovieDB_MovieCastService.__typeName = 'MovieTutorial.MovieDB.MovieCastService';
	$MovieTutorial_MovieDB_MovieCastService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/MovieCast/Create', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieCastService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/MovieCast/Update', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieCastService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/MovieCast/Delete', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieCastService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/MovieCast/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieCastService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/MovieCast/List', request, onSuccess, options);
	};
	global.MovieTutorial.MovieDB.MovieCastService = $MovieTutorial_MovieDB_MovieCastService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieDialog
	var $MovieTutorial_MovieDB_MovieDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_MovieDB_MovieDialog.__typeName = 'MovieTutorial.MovieDB.MovieDialog';
	global.MovieTutorial.MovieDB.MovieDialog = $MovieTutorial_MovieDB_MovieDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieForm
	var $MovieTutorial_MovieDB_MovieForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_MovieDB_MovieForm.__typeName = 'MovieTutorial.MovieDB.MovieForm';
	global.MovieTutorial.MovieDB.MovieForm = $MovieTutorial_MovieDB_MovieForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieGrid
	var $MovieTutorial_MovieDB_MovieGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_MovieDB_MovieGrid.__typeName = 'MovieTutorial.MovieDB.MovieGrid';
	global.MovieTutorial.MovieDB.MovieGrid = $MovieTutorial_MovieDB_MovieGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieKind
	var $MovieTutorial_MovieDB_MovieKind = function() {
	};
	$MovieTutorial_MovieDB_MovieKind.__typeName = 'MovieTutorial.MovieDB.MovieKind';
	global.MovieTutorial.MovieDB.MovieKind = $MovieTutorial_MovieDB_MovieKind;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.MovieService
	var $MovieTutorial_MovieDB_MovieService = function() {
	};
	$MovieTutorial_MovieDB_MovieService.__typeName = 'MovieTutorial.MovieDB.MovieService';
	$MovieTutorial_MovieDB_MovieService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Movie/Create', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Movie/Update', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Movie/Delete', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Movie/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_MovieService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Movie/List', request, onSuccess, options);
	};
	global.MovieTutorial.MovieDB.MovieService = $MovieTutorial_MovieDB_MovieService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.PersonDialog
	var $MovieTutorial_MovieDB_PersonDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_MovieDB_PersonDialog.__typeName = 'MovieTutorial.MovieDB.PersonDialog';
	global.MovieTutorial.MovieDB.PersonDialog = $MovieTutorial_MovieDB_PersonDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.PersonForm
	var $MovieTutorial_MovieDB_PersonForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_MovieDB_PersonForm.__typeName = 'MovieTutorial.MovieDB.PersonForm';
	global.MovieTutorial.MovieDB.PersonForm = $MovieTutorial_MovieDB_PersonForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.PersonGrid
	var $MovieTutorial_MovieDB_PersonGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_MovieDB_PersonGrid.__typeName = 'MovieTutorial.MovieDB.PersonGrid';
	global.MovieTutorial.MovieDB.PersonGrid = $MovieTutorial_MovieDB_PersonGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.MovieDB.PersonService
	var $MovieTutorial_MovieDB_PersonService = function() {
	};
	$MovieTutorial_MovieDB_PersonService.__typeName = 'MovieTutorial.MovieDB.PersonService';
	$MovieTutorial_MovieDB_PersonService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Person/Create', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_PersonService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Person/Update', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_PersonService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Person/Delete', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_PersonService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Person/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_MovieDB_PersonService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('MovieDB/Person/List', request, onSuccess, options);
	};
	global.MovieTutorial.MovieDB.PersonService = $MovieTutorial_MovieDB_PersonService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CategoryDialog
	var $MovieTutorial_Northwind_CategoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_CategoryDialog.__typeName = 'MovieTutorial.Northwind.CategoryDialog';
	global.MovieTutorial.Northwind.CategoryDialog = $MovieTutorial_Northwind_CategoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CategoryForm
	var $MovieTutorial_Northwind_CategoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_CategoryForm.__typeName = 'MovieTutorial.Northwind.CategoryForm';
	global.MovieTutorial.Northwind.CategoryForm = $MovieTutorial_Northwind_CategoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CategoryGrid
	var $MovieTutorial_Northwind_CategoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_CategoryGrid.__typeName = 'MovieTutorial.Northwind.CategoryGrid';
	global.MovieTutorial.Northwind.CategoryGrid = $MovieTutorial_Northwind_CategoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CategoryService
	var $MovieTutorial_Northwind_CategoryService = function() {
	};
	$MovieTutorial_Northwind_CategoryService.__typeName = 'MovieTutorial.Northwind.CategoryService';
	$MovieTutorial_Northwind_CategoryService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Category/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CategoryService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Category/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CategoryService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Category/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CategoryService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Category/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CategoryService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Category/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.CategoryService = $MovieTutorial_Northwind_CategoryService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerCustomerDemoDialog
	var $MovieTutorial_Northwind_CustomerCustomerDemoDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoDialog.__typeName = 'MovieTutorial.Northwind.CustomerCustomerDemoDialog';
	global.MovieTutorial.Northwind.CustomerCustomerDemoDialog = $MovieTutorial_Northwind_CustomerCustomerDemoDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerCustomerDemoForm
	var $MovieTutorial_Northwind_CustomerCustomerDemoForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoForm.__typeName = 'MovieTutorial.Northwind.CustomerCustomerDemoForm';
	global.MovieTutorial.Northwind.CustomerCustomerDemoForm = $MovieTutorial_Northwind_CustomerCustomerDemoForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerCustomerDemoGrid
	var $MovieTutorial_Northwind_CustomerCustomerDemoGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoGrid.__typeName = 'MovieTutorial.Northwind.CustomerCustomerDemoGrid';
	global.MovieTutorial.Northwind.CustomerCustomerDemoGrid = $MovieTutorial_Northwind_CustomerCustomerDemoGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerCustomerDemoService
	var $MovieTutorial_Northwind_CustomerCustomerDemoService = function() {
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoService.__typeName = 'MovieTutorial.Northwind.CustomerCustomerDemoService';
	$MovieTutorial_Northwind_CustomerCustomerDemoService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerCustomerDemo/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerCustomerDemo/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerCustomerDemo/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerCustomerDemo/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerCustomerDemoService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerCustomerDemo/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.CustomerCustomerDemoService = $MovieTutorial_Northwind_CustomerCustomerDemoService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerDemographicDialog
	var $MovieTutorial_Northwind_CustomerDemographicDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_CustomerDemographicDialog.__typeName = 'MovieTutorial.Northwind.CustomerDemographicDialog';
	global.MovieTutorial.Northwind.CustomerDemographicDialog = $MovieTutorial_Northwind_CustomerDemographicDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerDemographicForm
	var $MovieTutorial_Northwind_CustomerDemographicForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_CustomerDemographicForm.__typeName = 'MovieTutorial.Northwind.CustomerDemographicForm';
	global.MovieTutorial.Northwind.CustomerDemographicForm = $MovieTutorial_Northwind_CustomerDemographicForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerDemographicGrid
	var $MovieTutorial_Northwind_CustomerDemographicGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_CustomerDemographicGrid.__typeName = 'MovieTutorial.Northwind.CustomerDemographicGrid';
	global.MovieTutorial.Northwind.CustomerDemographicGrid = $MovieTutorial_Northwind_CustomerDemographicGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerDemographicService
	var $MovieTutorial_Northwind_CustomerDemographicService = function() {
	};
	$MovieTutorial_Northwind_CustomerDemographicService.__typeName = 'MovieTutorial.Northwind.CustomerDemographicService';
	$MovieTutorial_Northwind_CustomerDemographicService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerDemographic/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerDemographicService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerDemographic/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerDemographicService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerDemographic/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerDemographicService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerDemographic/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerDemographicService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/CustomerDemographic/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.CustomerDemographicService = $MovieTutorial_Northwind_CustomerDemographicService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerDialog
	var $MovieTutorial_Northwind_CustomerDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_CustomerDialog.__typeName = 'MovieTutorial.Northwind.CustomerDialog';
	global.MovieTutorial.Northwind.CustomerDialog = $MovieTutorial_Northwind_CustomerDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerForm
	var $MovieTutorial_Northwind_CustomerForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_CustomerForm.__typeName = 'MovieTutorial.Northwind.CustomerForm';
	global.MovieTutorial.Northwind.CustomerForm = $MovieTutorial_Northwind_CustomerForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerGrid
	var $MovieTutorial_Northwind_CustomerGrid = function(container) {
		this.$country = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_CustomerGrid.__typeName = 'MovieTutorial.Northwind.CustomerGrid';
	global.MovieTutorial.Northwind.CustomerGrid = $MovieTutorial_Northwind_CustomerGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.CustomerService
	var $MovieTutorial_Northwind_CustomerService = function() {
	};
	$MovieTutorial_Northwind_CustomerService.__typeName = 'MovieTutorial.Northwind.CustomerService';
	$MovieTutorial_Northwind_CustomerService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Customer/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Customer/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Customer/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Customer/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_CustomerService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Customer/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.CustomerService = $MovieTutorial_Northwind_CustomerService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeDialog
	var $MovieTutorial_Northwind_EmployeeDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_EmployeeDialog.__typeName = 'MovieTutorial.Northwind.EmployeeDialog';
	global.MovieTutorial.Northwind.EmployeeDialog = $MovieTutorial_Northwind_EmployeeDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeForm
	var $MovieTutorial_Northwind_EmployeeForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_EmployeeForm.__typeName = 'MovieTutorial.Northwind.EmployeeForm';
	global.MovieTutorial.Northwind.EmployeeForm = $MovieTutorial_Northwind_EmployeeForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeGrid
	var $MovieTutorial_Northwind_EmployeeGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_EmployeeGrid.__typeName = 'MovieTutorial.Northwind.EmployeeGrid';
	global.MovieTutorial.Northwind.EmployeeGrid = $MovieTutorial_Northwind_EmployeeGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeService
	var $MovieTutorial_Northwind_EmployeeService = function() {
	};
	$MovieTutorial_Northwind_EmployeeService.__typeName = 'MovieTutorial.Northwind.EmployeeService';
	$MovieTutorial_Northwind_EmployeeService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Employee/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Employee/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Employee/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Employee/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Employee/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.EmployeeService = $MovieTutorial_Northwind_EmployeeService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeTerritoryDialog
	var $MovieTutorial_Northwind_EmployeeTerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryDialog.__typeName = 'MovieTutorial.Northwind.EmployeeTerritoryDialog';
	global.MovieTutorial.Northwind.EmployeeTerritoryDialog = $MovieTutorial_Northwind_EmployeeTerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeTerritoryForm
	var $MovieTutorial_Northwind_EmployeeTerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryForm.__typeName = 'MovieTutorial.Northwind.EmployeeTerritoryForm';
	global.MovieTutorial.Northwind.EmployeeTerritoryForm = $MovieTutorial_Northwind_EmployeeTerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeTerritoryGrid
	var $MovieTutorial_Northwind_EmployeeTerritoryGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryGrid.__typeName = 'MovieTutorial.Northwind.EmployeeTerritoryGrid';
	global.MovieTutorial.Northwind.EmployeeTerritoryGrid = $MovieTutorial_Northwind_EmployeeTerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.EmployeeTerritoryService
	var $MovieTutorial_Northwind_EmployeeTerritoryService = function() {
	};
	$MovieTutorial_Northwind_EmployeeTerritoryService.__typeName = 'MovieTutorial.Northwind.EmployeeTerritoryService';
	$MovieTutorial_Northwind_EmployeeTerritoryService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/EmployeeTerritory/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/EmployeeTerritory/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/EmployeeTerritory/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/EmployeeTerritory/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_EmployeeTerritoryService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/EmployeeTerritory/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.EmployeeTerritoryService = $MovieTutorial_Northwind_EmployeeTerritoryService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderDetailDialog
	var $MovieTutorial_Northwind_OrderDetailDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_OrderDetailDialog.__typeName = 'MovieTutorial.Northwind.OrderDetailDialog';
	global.MovieTutorial.Northwind.OrderDetailDialog = $MovieTutorial_Northwind_OrderDetailDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderDetailForm
	var $MovieTutorial_Northwind_OrderDetailForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_OrderDetailForm.__typeName = 'MovieTutorial.Northwind.OrderDetailForm';
	global.MovieTutorial.Northwind.OrderDetailForm = $MovieTutorial_Northwind_OrderDetailForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderDetailGrid
	var $MovieTutorial_Northwind_OrderDetailGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_OrderDetailGrid.__typeName = 'MovieTutorial.Northwind.OrderDetailGrid';
	global.MovieTutorial.Northwind.OrderDetailGrid = $MovieTutorial_Northwind_OrderDetailGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderDetailService
	var $MovieTutorial_Northwind_OrderDetailService = function() {
	};
	$MovieTutorial_Northwind_OrderDetailService.__typeName = 'MovieTutorial.Northwind.OrderDetailService';
	$MovieTutorial_Northwind_OrderDetailService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/OrderDetail/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderDetailService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/OrderDetail/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderDetailService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/OrderDetail/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderDetailService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/OrderDetail/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderDetailService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/OrderDetail/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.OrderDetailService = $MovieTutorial_Northwind_OrderDetailService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderDialog
	var $MovieTutorial_Northwind_OrderDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_OrderDialog.__typeName = 'MovieTutorial.Northwind.OrderDialog';
	global.MovieTutorial.Northwind.OrderDialog = $MovieTutorial_Northwind_OrderDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderForm
	var $MovieTutorial_Northwind_OrderForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_OrderForm.__typeName = 'MovieTutorial.Northwind.OrderForm';
	global.MovieTutorial.Northwind.OrderForm = $MovieTutorial_Northwind_OrderForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderGrid
	var $MovieTutorial_Northwind_OrderGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_OrderGrid.__typeName = 'MovieTutorial.Northwind.OrderGrid';
	global.MovieTutorial.Northwind.OrderGrid = $MovieTutorial_Northwind_OrderGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.OrderService
	var $MovieTutorial_Northwind_OrderService = function() {
	};
	$MovieTutorial_Northwind_OrderService.__typeName = 'MovieTutorial.Northwind.OrderService';
	$MovieTutorial_Northwind_OrderService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Order/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Order/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Order/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Order/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_OrderService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Order/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.OrderService = $MovieTutorial_Northwind_OrderService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.PhoneEditor
	var $MovieTutorial_Northwind_PhoneEditor = function(input) {
		this.$5$MultipleField = false;
		Serenity.StringEditor.call(this, input);
		Serenity.VX.addValidationRule(this, this.uniqueName, ss.mkdel(this, function(e) {
			var value = Q.trimToNull(this.get_value());
			if (ss.isNullOrUndefined(value)) {
				return null;
			}
			return $MovieTutorial_Northwind_PhoneEditor.$validate(value, this.get_multiple());
		}));
		input.bind('change', ss.mkdel(this, function(e1) {
			if (!Serenity.WX.hasOriginalEvent(e1)) {
				return;
			}
			this.formatValue();
		}));
		input.bind('blur', ss.mkdel(this, function(e2) {
			if (this.element.hasClass('valid')) {
				this.formatValue();
			}
		}));
	};
	$MovieTutorial_Northwind_PhoneEditor.__typeName = 'MovieTutorial.Northwind.PhoneEditor';
	$MovieTutorial_Northwind_PhoneEditor.$validate = function(phone, isMultiple) {
		var valid = (isMultiple ? $MovieTutorial_Northwind_PhoneEditor.$isValidMulti(phone, $MovieTutorial_Northwind_PhoneEditor.$isValidPhone) : $MovieTutorial_Northwind_PhoneEditor.$isValidPhone(phone));
		if (valid) {
			return null;
		}
		return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
	};
	$MovieTutorial_Northwind_PhoneEditor.$isValidPhone = function(phone) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		phone = ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', '');
		if (phone.length < 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		if (ss.startsWithString(phone, '(') && phone.charCodeAt(4) === 41) {
			phone = phone.substr(1, 3) + phone.substring(5);
		}
		if (phone.length !== 10) {
			return false;
		}
		if (ss.startsWithString(phone, '0')) {
			return false;
		}
		for (var i = 0; i < phone.length; i++) {
			var c = phone.charCodeAt(i);
			if (c < 48 || c > 57) {
				return false;
			}
		}
		return true;
	};
	$MovieTutorial_Northwind_PhoneEditor.$formatPhone = function(phone) {
		if (!$MovieTutorial_Northwind_PhoneEditor.$isValidPhone(phone)) {
			return phone;
		}
		phone = ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(ss.replaceAllString(phone, ' ', ''), '-', ''), '(', ''), ')', '');
		if (ss.startsWithString(phone, '0')) {
			phone = phone.substring(1);
		}
		phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
		return phone;
	};
	$MovieTutorial_Northwind_PhoneEditor.$formatMulti = function(phone, format) {
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var result = '';
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (result.length > 0) {
				result += ', ';
			}
			result += format(s);
		}
		return result;
	};
	$MovieTutorial_Northwind_PhoneEditor.$isValidMulti = function(phone, check) {
		if (Q.isEmptyOrNull(phone)) {
			return false;
		}
		var phones = ss.replaceAllString(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
		var anyValid = false;
		for (var $t1 = 0; $t1 < phones.length; $t1++) {
			var x = phones[$t1];
			var s = Q.trimToNull(x);
			if (ss.isNullOrUndefined(s)) {
				continue;
			}
			if (!check(s)) {
				return false;
			}
			anyValid = true;
		}
		if (!anyValid) {
			return false;
		}
		return true;
	};
	global.MovieTutorial.Northwind.PhoneEditor = $MovieTutorial_Northwind_PhoneEditor;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ProductDialog
	var $MovieTutorial_Northwind_ProductDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_ProductDialog.__typeName = 'MovieTutorial.Northwind.ProductDialog';
	global.MovieTutorial.Northwind.ProductDialog = $MovieTutorial_Northwind_ProductDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ProductForm
	var $MovieTutorial_Northwind_ProductForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_ProductForm.__typeName = 'MovieTutorial.Northwind.ProductForm';
	global.MovieTutorial.Northwind.ProductForm = $MovieTutorial_Northwind_ProductForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ProductGrid
	var $MovieTutorial_Northwind_ProductGrid = function(container) {
		this.$supplier = null;
		this.$category = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_ProductGrid.__typeName = 'MovieTutorial.Northwind.ProductGrid';
	global.MovieTutorial.Northwind.ProductGrid = $MovieTutorial_Northwind_ProductGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ProductService
	var $MovieTutorial_Northwind_ProductService = function() {
	};
	$MovieTutorial_Northwind_ProductService.__typeName = 'MovieTutorial.Northwind.ProductService';
	$MovieTutorial_Northwind_ProductService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Product/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ProductService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Product/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ProductService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Product/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ProductService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Product/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ProductService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Product/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.ProductService = $MovieTutorial_Northwind_ProductService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.RegionDialog
	var $MovieTutorial_Northwind_RegionDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_RegionDialog.__typeName = 'MovieTutorial.Northwind.RegionDialog';
	global.MovieTutorial.Northwind.RegionDialog = $MovieTutorial_Northwind_RegionDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.RegionForm
	var $MovieTutorial_Northwind_RegionForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_RegionForm.__typeName = 'MovieTutorial.Northwind.RegionForm';
	global.MovieTutorial.Northwind.RegionForm = $MovieTutorial_Northwind_RegionForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.RegionGrid
	var $MovieTutorial_Northwind_RegionGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_RegionGrid.__typeName = 'MovieTutorial.Northwind.RegionGrid';
	global.MovieTutorial.Northwind.RegionGrid = $MovieTutorial_Northwind_RegionGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.RegionService
	var $MovieTutorial_Northwind_RegionService = function() {
	};
	$MovieTutorial_Northwind_RegionService.__typeName = 'MovieTutorial.Northwind.RegionService';
	$MovieTutorial_Northwind_RegionService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Region/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_RegionService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Region/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_RegionService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Region/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_RegionService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Region/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_RegionService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Region/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.RegionService = $MovieTutorial_Northwind_RegionService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ShipperDialog
	var $MovieTutorial_Northwind_ShipperDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_ShipperDialog.__typeName = 'MovieTutorial.Northwind.ShipperDialog';
	global.MovieTutorial.Northwind.ShipperDialog = $MovieTutorial_Northwind_ShipperDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ShipperForm
	var $MovieTutorial_Northwind_ShipperForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_ShipperForm.__typeName = 'MovieTutorial.Northwind.ShipperForm';
	global.MovieTutorial.Northwind.ShipperForm = $MovieTutorial_Northwind_ShipperForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ShipperGrid
	var $MovieTutorial_Northwind_ShipperGrid = function(container) {
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_ShipperGrid.__typeName = 'MovieTutorial.Northwind.ShipperGrid';
	global.MovieTutorial.Northwind.ShipperGrid = $MovieTutorial_Northwind_ShipperGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.ShipperService
	var $MovieTutorial_Northwind_ShipperService = function() {
	};
	$MovieTutorial_Northwind_ShipperService.__typeName = 'MovieTutorial.Northwind.ShipperService';
	$MovieTutorial_Northwind_ShipperService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Shipper/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ShipperService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Shipper/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ShipperService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Shipper/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ShipperService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Shipper/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_ShipperService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Shipper/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.ShipperService = $MovieTutorial_Northwind_ShipperService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.SupplierDialog
	var $MovieTutorial_Northwind_SupplierDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_SupplierDialog.__typeName = 'MovieTutorial.Northwind.SupplierDialog';
	global.MovieTutorial.Northwind.SupplierDialog = $MovieTutorial_Northwind_SupplierDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.SupplierForm
	var $MovieTutorial_Northwind_SupplierForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_SupplierForm.__typeName = 'MovieTutorial.Northwind.SupplierForm';
	global.MovieTutorial.Northwind.SupplierForm = $MovieTutorial_Northwind_SupplierForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.SupplierGrid
	var $MovieTutorial_Northwind_SupplierGrid = function(container) {
		this.$country = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_SupplierGrid.__typeName = 'MovieTutorial.Northwind.SupplierGrid';
	global.MovieTutorial.Northwind.SupplierGrid = $MovieTutorial_Northwind_SupplierGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.SupplierService
	var $MovieTutorial_Northwind_SupplierService = function() {
	};
	$MovieTutorial_Northwind_SupplierService.__typeName = 'MovieTutorial.Northwind.SupplierService';
	$MovieTutorial_Northwind_SupplierService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Supplier/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_SupplierService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Supplier/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_SupplierService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Supplier/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_SupplierService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Supplier/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_SupplierService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Supplier/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.SupplierService = $MovieTutorial_Northwind_SupplierService;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.TerritoryDialog
	var $MovieTutorial_Northwind_TerritoryDialog = function() {
		ss.makeGenericType(Serenity.EntityDialog$1, [Object]).call(this);
	};
	$MovieTutorial_Northwind_TerritoryDialog.__typeName = 'MovieTutorial.Northwind.TerritoryDialog';
	global.MovieTutorial.Northwind.TerritoryDialog = $MovieTutorial_Northwind_TerritoryDialog;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.TerritoryForm
	var $MovieTutorial_Northwind_TerritoryForm = function(idPrefix) {
		Serenity.PrefixedContext.call(this, idPrefix);
	};
	$MovieTutorial_Northwind_TerritoryForm.__typeName = 'MovieTutorial.Northwind.TerritoryForm';
	global.MovieTutorial.Northwind.TerritoryForm = $MovieTutorial_Northwind_TerritoryForm;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.TerritoryGrid
	var $MovieTutorial_Northwind_TerritoryGrid = function(container) {
		this.$region = null;
		ss.makeGenericType(Serenity.EntityGrid$1, [Object]).call(this, container);
	};
	$MovieTutorial_Northwind_TerritoryGrid.__typeName = 'MovieTutorial.Northwind.TerritoryGrid';
	global.MovieTutorial.Northwind.TerritoryGrid = $MovieTutorial_Northwind_TerritoryGrid;
	////////////////////////////////////////////////////////////////////////////////
	// MovieTutorial.Northwind.TerritoryService
	var $MovieTutorial_Northwind_TerritoryService = function() {
	};
	$MovieTutorial_Northwind_TerritoryService.__typeName = 'MovieTutorial.Northwind.TerritoryService';
	$MovieTutorial_Northwind_TerritoryService.create = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Territory/Create', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_TerritoryService.update = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Territory/Update', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_TerritoryService.delete$1 = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Territory/Delete', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_TerritoryService.retrieve = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Territory/Retrieve', request, onSuccess, options);
	};
	$MovieTutorial_Northwind_TerritoryService.list = function(request, onSuccess, options) {
		return Q.serviceRequest('Northwind/Territory/List', request, onSuccess, options);
	};
	global.MovieTutorial.Northwind.TerritoryService = $MovieTutorial_Northwind_TerritoryService;
	ss.initClass($MovieTutorial_ScriptInitialization, $asm, {});
	ss.initClass($MovieTutorial_Administration_LanguageDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Administration_LanguageForm, $asm, {
		get_languageId: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageId');
		},
		get_languageName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LanguageName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Administration_LanguageGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Administration_LanguageService, $asm, {});
	ss.initClass($MovieTutorial_Administration_PermissionCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var permissions = Q.getRemoteData('Administration.PermissionKeys').Entities;
			var permissionTitles = {};
			for (var i = 0; i < permissions.length; i++) {
				var p = permissions[i];
				permissionTitles[p] = ss.coalesce(Q.tryGetText('Permission.' + p), p);
			}
			permissions.sort(function(x, y) {
				return Q$Externals.turkishLocaleCompare(permissionTitles[x], permissionTitles[y]);
			});
			for (var $t1 = 0; $t1 < permissions.length; $t1++) {
				var permission = permissions[$t1];
				list.push({ id: permission, text: permissionTitles[permission] });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($MovieTutorial_Administration_PermissionModuleEditor, $asm, {}, ss.makeGenericType(Serenity.Select2Editor$2, [Object, String]), [Serenity.IStringValue]);
	ss.initClass($MovieTutorial_Administration_RoleCheckEditor, $asm, {
		getButtons: function() {
			return [];
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, text) {
				this.$containsText = Q.trimToNull(text);
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.CheckTreeEditor$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			var contains = Select2.util.stripDiacritics(ss.coalesce(this.$containsText, '')).toUpperCase();
			if (Q.isEmptyOrNull(contains)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.text, '')).toUpperCase().indexOf(contains) !== -1) {
				return true;
			}
			return false;
		},
		getItems: function() {
			var list = [];
			var roles = Q.getLookup('Administration.Role').get_items();
			for (var $t1 = 0; $t1 < roles.length; $t1++) {
				var role = roles[$t1];
				list.push({ id: role.RoleId.toString(), text: role.RoleName });
			}
			return list;
		}
	}, ss.makeGenericType(Serenity.CheckTreeEditor$1, [Object]), [Serenity.IDataGrid, Serenity.IGetEditValue, Serenity.ISetEditValue]);
	ss.initClass($MovieTutorial_Administration_RoleDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.RolePermissionDialog.EditButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $MovieTutorial_Administration_RolePermissionDialog({ roleID: ss.unbox(this.get_entity().RoleId), title: this.get_entity().RoleName })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Administration_RoleForm, $asm, {
		get_roleName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'RoleName');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Administration_RoleGrid, $asm, {
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('RoleName');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Administration_RolePermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				$MovieTutorial_Administration_RolePermissionService.update({ RoleID: this.options.roleID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($MovieTutorial_Administration_RolePermissionService, $asm, {});
	ss.initClass($MovieTutorial_Administration_RoleService, $asm, {});
	ss.initClass($MovieTutorial_Administration_TranslationGrid, $asm, {
		onClick: function(e, row, cell) {
			ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onClick.call(this, e, row, cell);
			if (e.isDefaultPrevented()) {
				return;
			}
			if ($(e.target).hasClass('source-text')) {
				e.preventDefault();
				var item = this.view.rows[row];
				var done = ss.mkdel(this, function() {
					item.CustomText = item.SourceText;
					this.view.updateItem(item.Key, item);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item.CustomText) || ss.referenceEquals(Q.trimToEmpty(item.CustomText), Q.trimToEmpty(item.SourceText))) {
					done();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
			}
			if ($(e.target).hasClass('target-text')) {
				e.preventDefault();
				var item1 = this.view.rows[row];
				var done1 = ss.mkdel(this, function() {
					item1.CustomText = item1.TargetText;
					this.view.updateItem(item1.Key, item1);
					this.$hasChanges = true;
				});
				if (Q.isTrimmedEmpty(item1.CustomText) || ss.referenceEquals(Q.trimToEmpty(item1.CustomText), Q.trimToEmpty(item1.TargetText))) {
					done1();
					return;
				}
				Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done1);
			}
		},
		getColumnsAsync: function() {
			var columns = [];
			columns.push({ field: 'Key', width: 300, sortable: false });
			columns.push({
				field: 'SourceText',
				width: 300,
				sortable: false,
				format: function(ctx) {
					return Q.outerHtml($('<a/>').addClass('source-text').text(ss.coalesce(ss.cast(ctx.value, String), '')));
				}
			});
			columns.push({
				field: 'CustomText',
				width: 300,
				sortable: false,
				format: function(ctx1) {
					return Q.outerHtml($('<input/>').addClass('custom-text').attr('value', ss.cast(ctx1.value, String)).attr('type', 'text').attr('data-key', ss.cast(ctx1.item.Key, String)));
				}
			});
			columns.push({
				field: 'TargetText',
				width: 300,
				sortable: false,
				format: function(ctx2) {
					return Q.outerHtml($('<a/>').addClass('target-text').text(ss.coalesce(ss.cast(ctx2.value, String), '')));
				}
			});
			return RSVP.resolve(columns);
		},
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.SourceLanguage') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Administration.Language';
			this.$sourceLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.changeSelect2(this.$sourceLanguage, ss.mkdel(this, function(e1) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Administration.Translation.TargetLanguage') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Administration.Language';
			this.$targetLanguage = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.changeSelect2(this.$targetLanguage, ss.mkdel(this, function(e3) {
				if (this.$hasChanges) {
					this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
				}
				else {
					this.refresh();
				}
			}));
		},
		saveChanges: function(language) {
			var translations = {};
			var $t1 = this.view.getItems();
			for (var $t2 = 0; $t2 < $t1.length; $t2++) {
				var item = $t1[$t2];
				translations[item.Key] = item.CustomText;
			}
			return RSVP.resolve($MovieTutorial_Administration_TranslationService.update({ TargetLanguageID: language, Translations: translations }, null, null)).then(ss.mkdel(this, function() {
				this.$hasChanges = false;
				Q.notifySuccess('User translations in "' + language + '" language are saved to "user.texts.' + language + '.json" ' + 'file under "~/script/site/texts/user/"');
			}), null);
		},
		onViewSubmit: function() {
			var request = this.view.params;
			request.SourceLanguageID = this.$sourceLanguage.get_value();
			this.$targetLanguageKey = ss.coalesce(this.$targetLanguage.get_value(), '');
			request.TargetLanguageID = this.$targetLanguageKey;
			this.$hasChanges = false;
			return ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this);
		},
		getButtons: function() {
			var $t1 = [];
			$t1.push({ title: 'Save Changes', onClick: ss.mkdel(this, function(e) {
				this.saveChanges(this.$targetLanguageKey).then(ss.mkdel(this, this.refresh), null);
			}), cssClass: 'apply-changes-button' });
			return $t1;
		},
		createQuickSearchInput: function() {
			Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.get_element(), ss.mkdel(this, function(field, searchText) {
				this.$searchText = searchText;
				this.view.setItems(this.view.getItems(), true);
			}), null);
		},
		onViewFilter: function(item) {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewFilter.call(this, item)) {
				return false;
			}
			if (Q.isEmptyOrNull(this.$searchText)) {
				return true;
			}
			var searching = Select2.util.stripDiacritics(this.$searchText).toLowerCase();
			if (Q.isEmptyOrNull(searching)) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.Key, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.SourceText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.TargetText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			if (Select2.util.stripDiacritics(ss.coalesce(item.CustomText, '')).toLowerCase().indexOf(searching) >= 0) {
				return true;
			}
			return false;
		},
		usePager: function() {
			return false;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Administration_TranslationService, $asm, {});
	ss.initClass($MovieTutorial_Administration_UserDialog, $asm, {
		getToolbarButtons: function() {
			var buttons = ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.getToolbarButtons.call(this);
			buttons.push({ title: Q.text('Site.UserDialog.EditRolesButton'), cssClass: 'users-button', onClick: ss.mkdel(this, function() {
				(new $MovieTutorial_Administration_UserRoleDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			buttons.push({ title: Q.text('Site.UserDialog.EditPermissionsButton'), cssClass: 'lock-button', onClick: ss.mkdel(this, function() {
				(new $MovieTutorial_Administration_UserPermissionDialog({ userID: ss.unbox(this.get_entity().UserId), username: this.get_entity().Username })).dialogOpen();
			}) });
			return buttons;
		},
		updateInterface: function() {
			ss.makeGenericType(Serenity.EntityDialog$2, [Object, Object]).prototype.updateInterface.call(this);
			this.toolbar.findButton('users-button').toggleClass('disabled', this.get_isNewOrDeleted());
			this.toolbar.findButton('lock-button').toggleClass('disabled', this.get_isNewOrDeleted());
		}
	}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($MovieTutorial_Administration_UserForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_displayName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'DisplayName');
		},
		get_email: function() {
			return this.byId(Serenity.EmailEditor).call(this, 'Email');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		},
		get_passwordConfirm: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'PasswordConfirm');
		},
		get_source: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Source');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Administration_UserGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'UserId', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'Username', width: 150, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'DisplayName', width: 150 });
			columns.push({ field: 'Email', width: 250 });
			columns.push({ field: 'Source', width: 100 });
			return columns;
		},
		getDefaultSortBy: function() {
			var $t1 = [];
			$t1.push('Username');
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Administration_UserPermissionDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				$MovieTutorial_Administration_UserPermissionService.update({ UserID: this.options.userID, Permissions: this.$permissions.get_value(), Module: null, Submodule: null }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Permissions'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($MovieTutorial_Administration_UserPermissionService, $asm, {});
	ss.initClass($MovieTutorial_Administration_UserRoleDialog, $asm, {
		getDialogOptions: function() {
			var opt = ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]).prototype.getDialogOptions.call(this);
			var $t1 = [];
			$t1.push({ text: Q.text('Dialogs.OkButton'), click: ss.mkdel(this, function() {
				$MovieTutorial_Administration_UserRoleService.update({ UserID: this.options.userID, Roles: Enumerable.from(this.$permissions.get_value()).select(function(x) {
					return parseInt(x, 10);
				}).toArray() }, ss.mkdel(this, function(response) {
					this.dialogClose();
					window.setTimeout(function() {
						Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
					}, 0);
				}), null);
			}) });
			$t1.push({ text: Q.text('Dialogs.CancelButton'), click: ss.mkdel(this, this.dialogClose) });
			opt.buttons = $t1;
			opt.title = ss.formatString(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
			return opt;
		},
		getTemplate: function() {
			return "<div id='~_Roles'></div>";
		}
	}, ss.makeGenericType(Serenity.TemplatedDialog$1, [Object]), [Serenity.IDialog]);
	ss.initClass($MovieTutorial_Administration_UserRoleService, $asm, {});
	ss.initClass($MovieTutorial_Administration_UserService, $asm, {});
	ss.initClass($MovieTutorial_Common_LanguageSelection, $asm, {
		getLookupAsync: function() {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.getLookupAsync.call(this).then(ss.mkdel(this, function(x) {
				if (!Enumerable.from(x.get_items()).any(ss.mkdel(this, function(z) {
					return ss.referenceEquals(z.LanguageId, this.$currentLanguage);
				}))) {
					var idx = this.$currentLanguage.lastIndexOf('-');
					if (idx >= 0) {
						this.$currentLanguage = this.$currentLanguage.substr(0, idx);
						if (!Enumerable.from(x.get_items()).any(ss.mkdel(this, function(z1) {
							return ss.referenceEquals(z1.LanguageId, this.$currentLanguage);
						}))) {
							this.$currentLanguage = 'en';
						}
					}
					else {
						this.$currentLanguage = 'en';
					}
				}
				return x;
			}), null);
		},
		updateItemsAsync: function() {
			return ss.makeGenericType(Serenity.LookupEditorBase$2, [Object, Object]).prototype.updateItemsAsync.call(this).then(ss.mkdel(this, function() {
				this.set_value(this.$currentLanguage);
			}), null);
		},
		getLookupKey: function() {
			return 'Administration.Language';
		},
		emptyItemText: function() {
			return null;
		}
	}, ss.makeGenericType(Serenity.LookupEditorBase$1, [Object]), [Serenity.IStringValue, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Common_SidebarSearch, $asm, {
		$updateMatchFlags: function(text) {
			var liList = this.$menuUL.find('li').removeClass('non-match');
			text = Q.trimToNull(text);
			if (ss.isNullOrUndefined(text)) {
				liList.removeClass('active');
				liList.show();
				liList.children('ul').addClass('collapse');
				return;
			}
			var parts = ss.netSplit(text, [44, 32].map(function(i) {
				return String.fromCharCode(i);
			}), null, 1);
			for (var i = 0; i < parts.length; i++) {
				parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
			}
			var items = liList;
			items.each(function(i1, e) {
				var x = $(e);
				var title = Select2.util.stripDiacritics(ss.coalesce(x.text(), '').toUpperCase());
				for (var $t1 = 0; $t1 < parts.length; $t1++) {
					var p = parts[$t1];
					if (ss.isValue(p) && !(title.indexOf(p) !== -1)) {
						x.addClass('non-match');
						break;
					}
				}
			});
			var matchingItems = items.not('.non-match');
			var visibles = matchingItems.parents('li').add(matchingItems);
			var nonVisibles = liList.not(visibles);
			nonVisibles.hide().addClass('non-match');
			visibles.show();
			liList.children('ul').removeClass('collapse');
		}
	}, Serenity.Widget);
	ss.initClass($MovieTutorial_Membership_LoginForm, $asm, {
		get_username: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Username');
		},
		get_password: function() {
			return this.byId(Serenity.PasswordEditor).call(this, 'Password');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Membership_LoginPanel, $asm, {}, ss.makeGenericType(Serenity.PropertyDialog$1, [Object]), [Serenity.IDialog]);
	ss.initEnum($MovieTutorial_MovieDB_Gender, $asm, { Male: 1, Female: 2 });
	ss.initClass($MovieTutorial_MovieDB_GenreDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($MovieTutorial_MovieDB_GenreForm, $asm, {
		get_name: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Name');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_MovieDB_GenreGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_MovieDB_GenreService, $asm, {});
	ss.initClass($MovieTutorial_MovieDB_MovieCastDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($MovieTutorial_MovieDB_MovieCastEditor, $asm, {}, ss.makeGenericType($MovieTutorial_Common_GridEditorBase$1, [Object]), [Serenity.IDataGrid, Serenity.ISetEditValue, Serenity.IGetEditValue]);
	ss.initClass($MovieTutorial_MovieDB_MovieCastForm, $asm, {
		get_movieId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'MovieId');
		},
		get_personId: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'PersonId');
		},
		get_character: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Character');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_MovieDB_MovieCastGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_MovieDB_MovieCastService, $asm, {});
	ss.initClass($MovieTutorial_MovieDB_MovieDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($MovieTutorial_MovieDB_MovieForm, $asm, {
		get_title: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Title');
		},
		get_description: function() {
			return this.byId(Serenity.TextAreaEditor).call(this, 'Description');
		},
		get_storyline: function() {
			return this.byId(Serenity.TextAreaEditor).call(this, 'Storyline');
		},
		get_year: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Year');
		},
		get_releaseDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'ReleaseDate');
		},
		get_runtime: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Runtime');
		},
		get_genreId: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'GenreId');
		},
		get_kind: function() {
			return this.byId(Serenity.EnumEditor).call(this, 'Kind');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_MovieDB_MovieGrid, $asm, {
		getQuickSearchFields: function() {
			var $t1 = [];
			$t1.push({ name: '', title: 'all' });
			$t1.push({ name: 'Description', title: 'description' });
			$t1.push({ name: 'Storyline', title: 'storyline' });
			$t1.push({ name: 'Year', title: 'year' });
			return $t1;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initEnum($MovieTutorial_MovieDB_MovieKind, $asm, { Film: 1, TvSeries: 2, MiniSeries: 3 });
	ss.initClass($MovieTutorial_MovieDB_MovieService, $asm, {});
	ss.initClass($MovieTutorial_MovieDB_PersonDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog]);
	ss.initClass($MovieTutorial_MovieDB_PersonForm, $asm, {
		get_firstname: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Firstname');
		},
		get_lastname: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Lastname');
		},
		get_birthDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'BirthDate');
		},
		get_birthPlace: function() {
			return this.byId(Serenity.StringEditor).call(this, 'BirthPlace');
		},
		get_gender: function() {
			return this.byId(Serenity.EnumEditor).call(this, 'Gender');
		},
		get_height: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'Height');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_MovieDB_PersonGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_MovieDB_PersonService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_CategoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_CategoryForm, $asm, {
		get_categoryName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CategoryName');
		},
		get_description: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Description');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_CategoryGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_CategoryService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_CustomerCustomerDemoDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_CustomerCustomerDemoForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_CustomerCustomerDemoGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerTypeID', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_CustomerCustomerDemoService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_CustomerDemographicDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_CustomerDemographicForm, $asm, {
		get_customerTypeID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerTypeID');
		},
		get_customerDesc: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerDesc');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_CustomerDemographicGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'ID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerTypeID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'CustomerDesc', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_CustomerDemographicService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_CustomerDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_CustomerForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_CustomerGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Customer.Country') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.CustomerCountry';
			this.$country = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$country, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var req = this.view.params;
			req.EqualityFilter = req.EqualityFilter || {};
			req.EqualityFilter['Country'] = this.$country.get_value();
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_CustomerService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_EmployeeDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_EmployeeForm, $asm, {
		get_lastName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'LastName');
		},
		get_firstName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'FirstName');
		},
		get_title: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Title');
		},
		get_titleOfCourtesy: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TitleOfCourtesy');
		},
		get_birthDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'BirthDate');
		},
		get_hireDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'HireDate');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_homePhone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePhone');
		},
		get_extension: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Extension');
		},
		get_photo: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Photo');
		},
		get_notes: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Notes');
		},
		get_reportsTo: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ReportsTo');
		},
		get_photoPath: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PhotoPath');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_EmployeeGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'LastName', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'FirstName', width: 80 });
			columns.push({ field: 'Title', width: 80 });
			columns.push({ field: 'TitleOfCourtesy', width: 80 });
			columns.push({ field: 'BirthDate', width: 80 });
			columns.push({ field: 'HireDate', width: 80 });
			columns.push({ field: 'Address', width: 80 });
			columns.push({ field: 'City', width: 80 });
			columns.push({ field: 'Region', width: 80 });
			columns.push({ field: 'PostalCode', width: 80 });
			columns.push({ field: 'Country', width: 80 });
			columns.push({ field: 'HomePhone', width: 80 });
			columns.push({ field: 'Extension', width: 80 });
			columns.push({ field: 'Photo', width: 80 });
			columns.push({ field: 'Notes', width: 80 });
			columns.push({ field: 'ReportsTo', width: 80 });
			columns.push({ field: 'PhotoPath', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_EmployeeService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_EmployeeTerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_EmployeeTerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_EmployeeTerritoryGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'EmployeeID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'TerritoryID', width: 200, format: this.itemLink(null, null, null, null, true) });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_EmployeeTerritoryService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_OrderDetailDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_OrderDetailForm, $asm, {
		get_productID: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ProductID');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_quantity: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Quantity');
		},
		get_discount: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Discount');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_OrderDetailGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'OrderID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'ProductID', width: 80 });
			columns.push({ field: 'UnitPrice', width: 80 });
			columns.push({ field: 'Quantity', width: 80 });
			columns.push({ field: 'Discount', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_OrderDetailService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_OrderDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_OrderForm, $asm, {
		get_customerID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CustomerID');
		},
		get_employeeID: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'EmployeeID');
		},
		get_orderDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'OrderDate');
		},
		get_requiredDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'RequiredDate');
		},
		get_shippedDate: function() {
			return this.byId(Serenity.DateEditor).call(this, 'ShippedDate');
		},
		get_shipVia: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'ShipVia');
		},
		get_freight: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'Freight');
		},
		get_shipName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipName');
		},
		get_shipAddress: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipAddress');
		},
		get_shipCity: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCity');
		},
		get_shipRegion: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipRegion');
		},
		get_shipPostalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipPostalCode');
		},
		get_shipCountry: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ShipCountry');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_OrderGrid, $asm, {
		getColumns: function() {
			var columns = ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.getColumns.call(this);
			columns.push({ field: 'OrderID', width: 55, cssClass: 'align-right', name: Q.text('Db.Shared.RecordId') });
			columns.push({ field: 'CustomerID', width: 200, format: this.itemLink(null, null, null, null, true) });
			columns.push({ field: 'EmployeeID', width: 80 });
			columns.push({ field: 'OrderDate', width: 80 });
			columns.push({ field: 'RequiredDate', width: 80 });
			columns.push({ field: 'ShippedDate', width: 80 });
			columns.push({ field: 'ShipVia', width: 80 });
			columns.push({ field: 'Freight', width: 80 });
			columns.push({ field: 'ShipName', width: 80 });
			columns.push({ field: 'ShipAddress', width: 80 });
			columns.push({ field: 'ShipCity', width: 80 });
			columns.push({ field: 'ShipRegion', width: 80 });
			columns.push({ field: 'ShipPostalCode', width: 80 });
			columns.push({ field: 'ShipCountry', width: 80 });
			return columns;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_OrderService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_PhoneEditor, $asm, {
		formatValue: function() {
			this.element.val(this.getFormattedValue());
		},
		getFormattedValue: function() {
			var value = this.element.val();
			if (this.get_multiple()) {
				return $MovieTutorial_Northwind_PhoneEditor.$formatMulti(value, $MovieTutorial_Northwind_PhoneEditor.$formatPhone);
			}
			return $MovieTutorial_Northwind_PhoneEditor.$formatPhone(value);
		},
		get_multiple: function() {
			return this.$5$MultipleField;
		},
		set_multiple: function(value) {
			this.$5$MultipleField = value;
		},
		get_value: function() {
			return this.getFormattedValue();
		},
		set_value: function(value) {
			this.element.val(value);
		}
	}, Serenity.StringEditor, [Serenity.IStringValue]);
	ss.initClass($MovieTutorial_Northwind_ProductDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_ProductForm, $asm, {
		get_productName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ProductName');
		},
		get_productImage: function() {
			return this.byId(Serenity.ImageUploadEditor).call(this, 'ProductImage');
		},
		get_discontinued: function() {
			return this.byId(Serenity.BooleanEditor).call(this, 'Discontinued');
		},
		get_supplierID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'SupplierID');
		},
		get_categoryID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'CategoryID');
		},
		get_quantityPerUnit: function() {
			return this.byId(Serenity.StringEditor).call(this, 'QuantityPerUnit');
		},
		get_unitPrice: function() {
			return this.byId(Serenity.DecimalEditor).call(this, 'UnitPrice');
		},
		get_unitsInStock: function() {
			return this.byId(Serenity.StringEditor).call(this, 'UnitsInStock');
		},
		get_unitsOnOrder: function() {
			return this.byId(Serenity.StringEditor).call(this, 'UnitsOnOrder');
		},
		get_reorderLevel: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ReorderLevel');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_ProductGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Product.SupplierCompanyName') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Supplier';
			this.$supplier = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$supplier, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
			var $t4 = ss.mkdel(this, function(e2) {
				e2.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Product.CategoryName') + ' ---');
			});
			var $t3 = Serenity.LookupEditorOptions.$ctor();
			$t3.lookupKey = 'Northwind.Category';
			this.$category = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t4, $t3, null);
			Serenity.WX.change(this.$category, ss.mkdel(this, function(e3) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var req = this.view.params;
			req.EqualityFilter = req.EqualityFilter || {};
			req.EqualityFilter['SupplierID'] = Serenity.IdExtensions.convertToId(this.$supplier.get_value());
			req.EqualityFilter['CategoryID'] = Serenity.IdExtensions.convertToId(this.$category.get_value());
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid]);
	ss.initClass($MovieTutorial_Northwind_ProductService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_RegionDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_RegionForm, $asm, {
		get_regionID: function() {
			return this.byId(Serenity.IntegerEditor).call(this, 'RegionID');
		},
		get_regionDescription: function() {
			return this.byId(Serenity.DateTimeEditor).call(this, 'RegionDescription');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_RegionGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_RegionService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_ShipperDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_ShipperForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_phone: function() {
			return this.byId($MovieTutorial_Northwind_PhoneEditor).call(this, 'Phone');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_ShipperGrid, $asm, {}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_ShipperService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_SupplierDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_SupplierForm, $asm, {
		get_companyName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'CompanyName');
		},
		get_contactName: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactName');
		},
		get_contactTitle: function() {
			return this.byId(Serenity.StringEditor).call(this, 'ContactTitle');
		},
		get_address: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Address');
		},
		get_city: function() {
			return this.byId(Serenity.StringEditor).call(this, 'City');
		},
		get_region: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Region');
		},
		get_postalCode: function() {
			return this.byId(Serenity.StringEditor).call(this, 'PostalCode');
		},
		get_country: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Country');
		},
		get_phone: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Phone');
		},
		get_fax: function() {
			return this.byId(Serenity.StringEditor).call(this, 'Fax');
		},
		get_homePage: function() {
			return this.byId(Serenity.StringEditor).call(this, 'HomePage');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_SupplierGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Supplier.Country') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.SupplierCountry';
			this.$country = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$country, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var req = this.view.params;
			req.EqualityFilter = req.EqualityFilter || {};
			req.EqualityFilter['Country'] = this.$country.get_value();
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_SupplierService, $asm, {});
	ss.initClass($MovieTutorial_Northwind_TerritoryDialog, $asm, {}, ss.makeGenericType(Serenity.EntityDialog$1, [Object]), [Serenity.IDialog, Serenity.IEditDialog, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_TerritoryForm, $asm, {
		get_territoryID: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryID');
		},
		get_territoryDescription: function() {
			return this.byId(Serenity.StringEditor).call(this, 'TerritoryDescription');
		},
		get_regionID: function() {
			return this.byId(Serenity.LookupEditor).call(this, 'RegionID');
		}
	}, Serenity.PrefixedContext);
	ss.initClass($MovieTutorial_Northwind_TerritoryGrid, $asm, {
		createToolbarExtensions: function() {
			ss.makeGenericType(Serenity.EntityGrid$2, [Object, Object]).prototype.createToolbarExtensions.call(this);
			var $t2 = ss.mkdel(this, function(e) {
				e.appendTo(this.toolbar.get_element()).attr('placeholder', '--- ' + Q.text('Db.Northwind.Territory.RegionDescription') + ' ---');
			});
			var $t1 = Serenity.LookupEditorOptions.$ctor();
			$t1.lookupKey = 'Northwind.Region';
			this.$region = Serenity.Widget.create(Serenity.LookupEditor).call(null, $t2, $t1, null);
			Serenity.WX.change(this.$region, ss.mkdel(this, function(e1) {
				this.refresh();
			}));
		},
		onViewSubmit: function() {
			if (!ss.makeGenericType(Serenity.DataGrid$2, [Object, Object]).prototype.onViewSubmit.call(this)) {
				return false;
			}
			var req = this.view.params;
			req.EqualityFilter = req.EqualityFilter || {};
			req.EqualityFilter['RegionID'] = Serenity.IdExtensions.convertToId(this.$region.get_value());
			return true;
		}
	}, ss.makeGenericType(Serenity.EntityGrid$1, [Object]), [Serenity.IDataGrid, Serenity.IAsyncInit]);
	ss.initClass($MovieTutorial_Northwind_TerritoryService, $asm, {});
	ss.setMetadata($MovieTutorial_Administration_LanguageDialog, { attr: [new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.FormKeyAttribute('Administration.Language'), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($MovieTutorial_Administration_LanguageGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Language'), new Serenity.IdPropertyAttribute('Id'), new Serenity.NamePropertyAttribute('LanguageName'), new Serenity.DialogTypeAttribute($MovieTutorial_Administration_LanguageDialog), new Serenity.LocalTextPrefixAttribute('Administration.Language'), new Serenity.ServiceAttribute('Administration/Language')] });
	ss.setMetadata($MovieTutorial_Administration_PermissionCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($MovieTutorial_Administration_PermissionModuleEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($MovieTutorial_Administration_RoleCheckEditor, { attr: [new Serenity.EditorAttribute()] });
	ss.setMetadata($MovieTutorial_Administration_RoleDialog, { attr: [new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.FormKeyAttribute('Administration.Role'), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($MovieTutorial_Administration_RoleGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Role'), new Serenity.IdPropertyAttribute('RoleId'), new Serenity.NamePropertyAttribute('RoleName'), new Serenity.DialogTypeAttribute($MovieTutorial_Administration_RoleDialog), new Serenity.LocalTextPrefixAttribute('Administration.Role'), new Serenity.ServiceAttribute('Administration/Role')] });
	ss.setMetadata($MovieTutorial_Administration_TranslationGrid, { attr: [new Serenity.ColumnsKeyAttribute('Administration.Translation'), new Serenity.IdPropertyAttribute('Key'), new Serenity.LocalTextPrefixAttribute('Administration.Translation'), new Serenity.ServiceAttribute('Administration/Translation')] });
	ss.setMetadata($MovieTutorial_Administration_UserDialog, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.FormKeyAttribute('Administration.User'), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($MovieTutorial_Administration_UserGrid, { attr: [new Serenity.IdPropertyAttribute('UserId'), new Serenity.NamePropertyAttribute('Username'), new Serenity.IsActivePropertyAttribute('IsActive'), new Serenity.DialogTypeAttribute($MovieTutorial_Administration_UserDialog), new Serenity.LocalTextPrefixAttribute('Administration.User'), new Serenity.ServiceAttribute('Administration/User')] });
	ss.setMetadata($MovieTutorial_Common_GridEditorBase$1, { attr: [new Serenity.ElementAttribute('<div/>'), new Serenity.EditorAttribute(), new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($MovieTutorial_Common_GridEditorDialog$1, { attr: [new Serenity.IdPropertyAttribute('__id')] });
	ss.setMetadata($MovieTutorial_Membership_LoginPanel, { attr: [new Serenity.PanelAttribute(), new Serenity.FormKeyAttribute('Membership.Login')] });
	ss.setMetadata($MovieTutorial_MovieDB_Gender, { attr: [new Serenity.EnumKeyAttribute('MovieDB.Gender')] });
	ss.setMetadata($MovieTutorial_MovieDB_GenreDialog, { attr: [new Serenity.IdPropertyAttribute('GenreId'), new Serenity.NamePropertyAttribute('Name'), new Serenity.FormKeyAttribute('MovieDB.Genre'), new Serenity.LocalTextPrefixAttribute('MovieDB.Genre'), new Serenity.ServiceAttribute('MovieDB/Genre')] });
	ss.setMetadata($MovieTutorial_MovieDB_GenreGrid, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.Genre'), new Serenity.IdPropertyAttribute('GenreId'), new Serenity.NamePropertyAttribute('Name'), new Serenity.DialogTypeAttribute($MovieTutorial_MovieDB_GenreDialog), new Serenity.LocalTextPrefixAttribute('MovieDB.Genre'), new Serenity.ServiceAttribute('MovieDB/Genre')] });
	ss.setMetadata($MovieTutorial_MovieDB_MovieCastDialog, { attr: [new Serenity.IdPropertyAttribute('MovieCastId'), new Serenity.NamePropertyAttribute('Character'), new Serenity.FormKeyAttribute('MovieDB.MovieCast'), new Serenity.LocalTextPrefixAttribute('MovieDB.MovieCast'), new Serenity.ServiceAttribute('MovieDB/MovieCast')] });
	ss.setMetadata($MovieTutorial_MovieDB_MovieCastEditor, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.MovieCast'), new Serenity.LocalTextPrefixAttribute('MovieDB.MovieCast')] });
	ss.setMetadata($MovieTutorial_MovieDB_MovieCastGrid, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.MovieCast'), new Serenity.IdPropertyAttribute('MovieCastId'), new Serenity.NamePropertyAttribute('Character'), new Serenity.DialogTypeAttribute($MovieTutorial_MovieDB_MovieCastDialog), new Serenity.LocalTextPrefixAttribute('MovieDB.MovieCast'), new Serenity.ServiceAttribute('MovieDB/MovieCast')] });
	ss.setMetadata($MovieTutorial_MovieDB_MovieDialog, { attr: [new Serenity.IdPropertyAttribute('MovieId'), new Serenity.NamePropertyAttribute('Title'), new Serenity.FormKeyAttribute('MovieDB.Movie'), new Serenity.LocalTextPrefixAttribute('MovieDB.Movie'), new Serenity.ServiceAttribute('MovieDB/Movie')] });
	ss.setMetadata($MovieTutorial_MovieDB_MovieGrid, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.Movie'), new Serenity.IdPropertyAttribute('MovieId'), new Serenity.NamePropertyAttribute('Title'), new Serenity.DialogTypeAttribute($MovieTutorial_MovieDB_MovieDialog), new Serenity.LocalTextPrefixAttribute('MovieDB.Movie'), new Serenity.ServiceAttribute('MovieDB/Movie')] });
	ss.setMetadata($MovieTutorial_MovieDB_MovieKind, { attr: [new Serenity.EnumKeyAttribute('MovieDB.MovieKind')] });
	ss.setMetadata($MovieTutorial_MovieDB_PersonDialog, { attr: [new Serenity.IdPropertyAttribute('PersonId'), new Serenity.NamePropertyAttribute('Fullname'), new Serenity.FormKeyAttribute('MovieDB.Person'), new Serenity.LocalTextPrefixAttribute('MovieDB.Person'), new Serenity.ServiceAttribute('MovieDB/Person')] });
	ss.setMetadata($MovieTutorial_MovieDB_PersonGrid, { attr: [new Serenity.ColumnsKeyAttribute('MovieDB.Person'), new Serenity.IdPropertyAttribute('PersonId'), new Serenity.NamePropertyAttribute('Firstname'), new Serenity.DialogTypeAttribute($MovieTutorial_MovieDB_PersonDialog), new Serenity.LocalTextPrefixAttribute('MovieDB.Person'), new Serenity.ServiceAttribute('MovieDB/Person')] });
	ss.setMetadata($MovieTutorial_Northwind_CategoryDialog, { attr: [new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.FormKeyAttribute('Northwind.Category'), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($MovieTutorial_Northwind_CategoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Category'), new Serenity.IdPropertyAttribute('CategoryID'), new Serenity.NamePropertyAttribute('CategoryName'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_CategoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Category'), new Serenity.ServiceAttribute('Northwind/Category')] });
	ss.setMetadata($MovieTutorial_Northwind_CustomerCustomerDemoDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.CustomerCustomerDemo'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($MovieTutorial_Northwind_CustomerCustomerDemoGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_CustomerCustomerDemoDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerCustomerDemo'), new Serenity.ServiceAttribute('Northwind/CustomerCustomerDemo')] });
	ss.setMetadata($MovieTutorial_Northwind_CustomerDemographicDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.FormKeyAttribute('Northwind.CustomerDemographic'), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($MovieTutorial_Northwind_CustomerDemographicGrid, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerTypeID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_CustomerDemographicDialog), new Serenity.LocalTextPrefixAttribute('Northwind.CustomerDemographic'), new Serenity.ServiceAttribute('Northwind/CustomerDemographic')] });
	ss.setMetadata($MovieTutorial_Northwind_CustomerDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.Customer'), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($MovieTutorial_Northwind_CustomerGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Customer'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_CustomerDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Customer'), new Serenity.ServiceAttribute('Northwind/Customer')] });
	ss.setMetadata($MovieTutorial_Northwind_EmployeeDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.FormKeyAttribute('Northwind.Employee'), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($MovieTutorial_Northwind_EmployeeGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('LastName'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_EmployeeDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Employee'), new Serenity.ServiceAttribute('Northwind/Employee')] });
	ss.setMetadata($MovieTutorial_Northwind_EmployeeTerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.EmployeeTerritory'), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($MovieTutorial_Northwind_EmployeeTerritoryGrid, { attr: [new Serenity.IdPropertyAttribute('EmployeeID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_EmployeeTerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.EmployeeTerritory'), new Serenity.ServiceAttribute('Northwind/EmployeeTerritory')] });
	ss.setMetadata($MovieTutorial_Northwind_OrderDetailDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.FormKeyAttribute('Northwind.OrderDetail'), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail'), new Serenity.ServiceAttribute('Northwind/OrderDetail')] });
	ss.setMetadata($MovieTutorial_Northwind_OrderDetailGrid, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_OrderDetailDialog), new Serenity.LocalTextPrefixAttribute('Northwind.OrderDetail'), new Serenity.ServiceAttribute('Northwind/OrderDetail')] });
	ss.setMetadata($MovieTutorial_Northwind_OrderDialog, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.FormKeyAttribute('Northwind.Order'), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($MovieTutorial_Northwind_OrderGrid, { attr: [new Serenity.IdPropertyAttribute('OrderID'), new Serenity.NamePropertyAttribute('CustomerID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_OrderDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Order'), new Serenity.ServiceAttribute('Northwind/Order')] });
	ss.setMetadata($MovieTutorial_Northwind_PhoneEditor, { attr: [new Serenity.EditorAttribute()], members: [{ attr: [new Serenity.ComponentModel.OptionAttribute()], name: 'Multiple', type: 16, returnType: Boolean, getter: { name: 'get_Multiple', type: 8, sname: 'get_multiple', returnType: Boolean, params: [] }, setter: { name: 'set_Multiple', type: 8, sname: 'set_multiple', returnType: Object, params: [Boolean] } }] });
	ss.setMetadata($MovieTutorial_Northwind_ProductDialog, { attr: [new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.FormKeyAttribute('Northwind.Product'), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($MovieTutorial_Northwind_ProductGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Product'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('ProductID'), new Serenity.NamePropertyAttribute('ProductName'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_ProductDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Product'), new Serenity.ServiceAttribute('Northwind/Product')] });
	ss.setMetadata($MovieTutorial_Northwind_RegionDialog, { attr: [new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.FormKeyAttribute('Northwind.Region'), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($MovieTutorial_Northwind_RegionGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Region'), new Serenity.IdPropertyAttribute('RegionID'), new Serenity.NamePropertyAttribute('RegionDescription'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_RegionDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Region'), new Serenity.ServiceAttribute('Northwind/Region')] });
	ss.setMetadata($MovieTutorial_Northwind_ShipperDialog, { attr: [new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Shipper'), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($MovieTutorial_Northwind_ShipperGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Shipper'), new Serenity.IdPropertyAttribute('ShipperID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_ShipperDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Shipper'), new Serenity.ServiceAttribute('Northwind/Shipper')] });
	ss.setMetadata($MovieTutorial_Northwind_SupplierDialog, { attr: [new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.FormKeyAttribute('Northwind.Supplier'), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($MovieTutorial_Northwind_SupplierGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Supplier'), new Serenity.FilterableAttribute(), new Serenity.IdPropertyAttribute('SupplierID'), new Serenity.NamePropertyAttribute('CompanyName'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_SupplierDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Supplier'), new Serenity.ServiceAttribute('Northwind/Supplier')] });
	ss.setMetadata($MovieTutorial_Northwind_TerritoryDialog, { attr: [new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.FormKeyAttribute('Northwind.Territory'), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	ss.setMetadata($MovieTutorial_Northwind_TerritoryGrid, { attr: [new Serenity.ColumnsKeyAttribute('Northwind.Territory'), new Serenity.IdPropertyAttribute('ID'), new Serenity.NamePropertyAttribute('TerritoryID'), new Serenity.DialogTypeAttribute($MovieTutorial_Northwind_TerritoryDialog), new Serenity.LocalTextPrefixAttribute('Northwind.Territory'), new Serenity.ServiceAttribute('Northwind/Territory')] });
	(function() {
		Q$Config.rootNamespaces.push('MovieTutorial');
	})();
})();
