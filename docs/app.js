var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
window.onload = function () {
    showUsers();
};
var row = document.querySelector('.form__row-submit');
var users = [];
var dniUserUpdate;
var url = 'https://task-crud-users.herokuapp.com';
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
function onClickSaveUser() {
    var form = document.querySelector('.register-users');
    var user = {
        name: form.children[1].querySelector('.form__input').value,
        lastName: form.children[2].querySelector('.form__input').value,
        email: form.children[3].querySelector('.form__input').value,
        dni: form.children[4].querySelector('.form__input').value
    };
    if (!isEmpty(user.name) && !isEmpty(user.lastName) && !isEmpty(user.email) && !isEmpty(user.dni)) {
        addUser(user);
        var i = 0;
        while (++i < 5) {
            form.children[i].querySelector('.form__input').value = '';
        }
    }
    saveColorRow();
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(dniUserUpdate !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateUser(dniUserUpdate, user)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetch(url + "/users/", {
                        method: 'POST',
                        body: JSON.stringify({ "names": user.name, "last_names": user.lastName, "email": user.email, "dni": user.dni }),
                        headers: { 'Content-Type': 'application/json' }
                    })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    showUsers();
                    return [2 /*return*/];
            }
        });
    });
}
function updateUser(dni, user) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url + "/users/" + dni, {
                        method: 'PUT',
                        body: JSON.stringify({ "names": user.name, "last_names": user.lastName, "email": user.email, "dni": user.dni }),
                        headers: { 'Content-Type': 'application/json' }
                    })];
                case 1:
                    _a.sent();
                    dniUserUpdate = undefined;
                    return [2 /*return*/];
            }
        });
    });
}
function showUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var req, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url + "/users")];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    res = _a.sent();
                    cleanShowUsers();
                    if (res.length > 0) {
                        setTitle('Lista de usuarios');
                    }
                    else {
                        setTitle('');
                    }
                    res.forEach(function (user) {
                        var div = document.createElement('div');
                        div.innerHTML = "\n\n            <div class=\"form__row\">\n    \n              <div class=\"form__container-input\">\n                <span class=\"form__title o-font-normal\">Nombres</span>\n                <input disabled value=\"" + user.names + "\" type=\"text\" class=\"form__input o-font-small\">\n              </div>\n              <svg class=\"form__icon\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M9.94737 7.46311C11.6769 7.46311 13.079 6.06105 13.079 4.33153C13.079 2.60201 11.6769 1.19995 9.94737 1.19995C8.21785 1.19995 6.8158 2.60201 6.8158 4.33153C6.8158 6.06105 8.21785 7.46311 9.94737 7.46311Z\"\n                  stroke=\"#D9D5D5\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M1 17.7526C1 13.7992 4.60534 10.5947 9.05263 10.5947\" stroke=\"#D9D5D5\" stroke-width=\"1.5\"\n                  stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M13.0789 18.1999L17.5526 13.7262L15.7631 11.9368L11.2894 16.4105V18.1999H13.0789Z\" stroke=\"#D9D5D5\"\n                  stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </svg>\n    \n            </div>\n            <div class=\"form__row\">\n              <div class=\"form__container-input\">\n                <span class=\"form__title o-font-normal\">Apellidos</span>\n                <input disabled value=\"" + user.last_names + "\" type=\"text\" class=\"form__input o-font-small\">\n              </div>\n              <svg class=\"form__icon\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M9.94737 7.46311C11.6769 7.46311 13.079 6.06105 13.079 4.33153C13.079 2.60201 11.6769 1.19995 9.94737 1.19995C8.21785 1.19995 6.8158 2.60201 6.8158 4.33153C6.8158 6.06105 8.21785 7.46311 9.94737 7.46311Z\"\n                  stroke=\"#D9D5D5\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M1 17.7526C1 13.7992 4.60534 10.5947 9.05263 10.5947\" stroke=\"#D9D5D5\" stroke-width=\"1.5\"\n                  stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M13.0789 18.1999L17.5526 13.7262L15.7631 11.9368L11.2894 16.4105V18.1999H13.0789Z\" stroke=\"#D9D5D5\"\n                  stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n              </svg>\n            </div>\n            <div class=\"form__row\">\n              <div class=\"form__container-input\">\n                <span class=\"form__title o-font-normal\">Correo</span>\n                <input disabled value=\"" + user.email + "\" type=\"email\" class=\"form__input o-font-small\">\n              </div>\n              <svg width=\"17\" height=\"14\" viewBox=\"0 0 17 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M2.7625 0.0999756H14.2375C14.9431 0.0999294 15.622 0.369896 16.1349 0.854496C16.6478 1.3391 16.9558 2.00159 16.9958 2.70608L17 2.86248V10.9375C17 11.6431 16.7301 12.322 16.2455 12.8349C15.7609 13.3478 15.0984 13.6558 14.3939 13.6957L14.2375 13.7H2.7625C2.05688 13.7 1.378 13.4301 0.865104 12.9455C0.352212 12.4609 0.0441989 11.7984 0.0042501 11.0939L5.92891e-09 10.9375V2.86248C-4.61947e-05 2.15686 0.269921 1.47797 0.754521 0.96508C1.23912 0.452188 1.90161 0.144174 2.6061 0.104226L2.7625 0.0999756H14.2375H2.7625ZM15.725 4.66703L8.7975 8.31353C8.71928 8.35485 8.63331 8.37944 8.54507 8.38573C8.45683 8.39202 8.36824 8.37988 8.28495 8.35008L8.20335 8.31438L1.275 4.66788V10.9375C1.27501 11.3108 1.4154 11.6704 1.66828 11.9451C1.92116 12.2197 2.26805 12.3892 2.6401 12.4199L2.7625 12.425H14.2375C14.6109 12.4249 14.9707 12.2844 15.2454 12.0314C15.52 11.7783 15.6894 11.4312 15.7199 11.059L15.725 10.9375V4.66703ZM14.2375 1.37498H2.7625C2.38919 1.37499 2.02953 1.51537 1.75492 1.76825C1.48031 2.02114 1.31082 2.36803 1.2801 2.74008L1.275 2.86248V3.22713L8.5 7.02918L15.725 3.22628V2.86248C15.725 2.48903 15.5845 2.12926 15.3314 1.85462C15.0784 1.57999 14.7312 1.41059 14.3591 1.38008L14.2375 1.37498Z\"\n                  fill=\"#D9D5D5\" />\n              </svg>\n    \n            </div>\n            <div class=\"form__row\">\n              <div class=\"form__container-input\">\n                <span class=\"form__title o-font-normal\">C\u00E9dula</span>\n                <input disabled value=\"" + user.dni + "\" type=\"number\" maxlength=\"10\" class=\"form__input o-font-small\">\n              </div>\n              <svg width=\"17\" height=\"12\" viewBox=\"0 0 17 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M8.31289 4.43702C8.19204 4.32441 8.0322 4.26311 7.86704 4.26602C7.70189 4.26894 7.54431 4.33584 7.42751 4.45264C7.31071 4.56944 7.2438 4.72702 7.24089 4.89218C7.23797 5.05733 7.29928 5.21717 7.41189 5.33802L8.02389 5.95002L7.41189 6.56202C7.34925 6.62039 7.29902 6.69077 7.26417 6.76896C7.22933 6.84716 7.21059 6.93158 7.20908 7.01718C7.20757 7.10278 7.22332 7.1878 7.25538 7.26718C7.28745 7.34656 7.33517 7.41867 7.3957 7.4792C7.45624 7.53974 7.52835 7.58746 7.60773 7.61953C7.68711 7.65159 7.77213 7.66734 7.85773 7.66583C7.94333 7.66432 8.02774 7.64558 8.10594 7.61074C8.18414 7.57589 8.25452 7.52566 8.31289 7.46302L8.92489 6.85102L9.53689 7.46302C9.65659 7.5825 9.81886 7.64954 9.98799 7.64938C10.1571 7.64922 10.3193 7.58188 10.4387 7.46217C10.5582 7.34247 10.6253 7.1802 10.6251 7.01107C10.6249 6.84194 10.5576 6.6798 10.4379 6.56032L9.82674 5.95002L10.4387 5.33802C10.4996 5.27919 10.5481 5.20882 10.5815 5.13103C10.6149 5.05323 10.6324 4.96957 10.6331 4.88492C10.6338 4.80028 10.6176 4.71634 10.5856 4.63801C10.5535 4.55968 10.5061 4.48852 10.4462 4.42869C10.3863 4.36887 10.3151 4.32156 10.2368 4.28955C10.1584 4.25753 10.0744 4.24144 9.9898 4.24221C9.90515 4.24299 9.82151 4.26061 9.74375 4.29406C9.66599 4.32751 9.59567 4.37611 9.53689 4.43702L8.92489 5.04902L8.31289 4.43702V4.43702Z\"\n                  fill=\"#D9D5D5\" />\n                <path\n                  d=\"M3.18644 4.2029C3.30597 4.08352 3.468 4.01646 3.63694 4.01646C3.80588 4.01646 3.96791 4.08352 4.08744 4.2029L4.69944 4.8149L5.31144 4.2029C5.3698 4.14027 5.44018 4.09003 5.51838 4.05519C5.59658 4.02035 5.681 4.00161 5.7666 4.0001C5.85219 3.99859 5.93722 4.01434 6.0166 4.0464C6.09598 4.07846 6.16809 4.12618 6.22862 4.18672C6.28916 4.24726 6.33688 4.31936 6.36894 4.39874C6.40101 4.47812 6.41675 4.56315 6.41524 4.64875C6.41373 4.73434 6.395 4.81876 6.36015 4.89696C6.32531 4.97516 6.27507 5.04554 6.21244 5.1039L5.60129 5.7159L6.21329 6.3262C6.27256 6.38542 6.31959 6.45573 6.35169 6.53312C6.38379 6.61051 6.40033 6.69347 6.40037 6.77725C6.40041 6.86104 6.38394 6.94401 6.35192 7.02143C6.31989 7.09885 6.27293 7.16921 6.21371 7.22848C6.1545 7.28775 6.08419 7.33478 6.0068 7.36688C5.9294 7.39898 5.84645 7.41552 5.76266 7.41556C5.67888 7.4156 5.59591 7.39913 5.51849 7.36711C5.44107 7.33508 5.37071 7.28812 5.31144 7.2289L4.69944 6.6169L4.08744 7.2289C3.96659 7.34151 3.80675 7.40282 3.64159 7.3999C3.47644 7.39699 3.31886 7.33008 3.20206 7.21328C3.08526 7.09648 3.01835 6.9389 3.01544 6.77375C3.01253 6.60859 3.07383 6.44875 3.18644 6.3279L3.79844 5.7159L3.18644 5.1039C3.06706 4.98437 3 4.82234 3 4.6534C3 4.48446 3.06706 4.32243 3.18644 4.2029V4.2029Z\"\n                  fill=\"#D9D5D5\" />\n                <path\n                  d=\"M12.3251 7.22498C12.156 7.22498 11.9939 7.29214 11.8743 7.4117C11.7548 7.53125 11.6876 7.6934 11.6876 7.86248C11.6876 8.03155 11.7548 8.1937 11.8743 8.31326C11.9939 8.43281 12.156 8.49998 12.3251 8.49998H13.8126C13.9817 8.49998 14.1438 8.43281 14.2634 8.31326C14.383 8.1937 14.4501 8.03155 14.4501 7.86248C14.4501 7.6934 14.383 7.53125 14.2634 7.4117C14.1438 7.29214 13.9817 7.22498 13.8126 7.22498H12.3251Z\"\n                  fill=\"#D9D5D5\" />\n                <path\n                  d=\"M2.7625 0C2.02984 0 1.32719 0.291048 0.809117 0.809117C0.291048 1.32719 0 2.02984 0 2.7625V9.1375C0 9.87016 0.291048 10.5728 0.809117 11.0909C1.32719 11.609 2.02984 11.9 2.7625 11.9H14.2375C14.6003 11.9 14.9595 11.8285 15.2947 11.6897C15.6298 11.5509 15.9344 11.3474 16.1909 11.0909C16.4474 10.8344 16.6509 10.5298 16.7897 10.1947C16.9285 9.8595 17 9.50028 17 9.1375V2.7625C17 2.39972 16.9285 2.0405 16.7897 1.70534C16.6509 1.37018 16.4474 1.06564 16.1909 0.809117C15.9344 0.552596 15.6298 0.349112 15.2947 0.210283C14.9595 0.0714543 14.6003 0 14.2375 0H2.7625ZM1.275 2.7625C1.275 1.94055 1.94055 1.275 2.7625 1.275H14.2375C15.0595 1.275 15.725 1.94055 15.725 2.7625V9.1375C15.725 9.53201 15.5683 9.91036 15.2893 10.1893C15.0104 10.4683 14.632 10.625 14.2375 10.625H2.7625C2.36799 10.625 1.98964 10.4683 1.71068 10.1893C1.43172 9.91036 1.275 9.53201 1.275 9.1375V2.7625Z\"\n                  fill=\"#D9D5D5\" />\n              </svg>\n    \n            </div>\n            <div class=\"container-buttons\">\n              <div class=\"form__row form__row-submit o-stroke-orange\">\n                <div class=\"form__container-input\">\n                  <span onclick=\"onClickUpdateUser(event)\" class=\"form__submit form__title o-font-normal\">Actualizar</span>\n                </div>\n              </div>\n              <div class=\"form__row form__row-submit o-stroke-red\">\n                <div class=\"form__container-input\">\n                  <span onclick=\"onClickDeleteUser(event)\" class=\"form__submit form__title o-font-normal\">Eliminar</span>\n                </div>\n              </div>\n            </div>\n          ";
                        div.classList.add('user');
                        document.querySelector('.show-users').appendChild(div);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function onClickUpdateUser(event) {
    var form = document.querySelector('.register-users');
    var i = 0;
    while (++i < 5) {
        form.children[i].querySelector('.form__input').value = event.path[4].children[i - 1].querySelector('.form__input').value;
    }
    dniUserUpdate = getDni(event);
    updateColorRow();
}
function onClickDeleteUser(event) {
    deleteUser(getDni(event));
    var form = document.querySelector('.register-users');
    var i = 0;
    while (++i < 5) {
        form.children[i].querySelector('.form__input').value = "";
    }
    saveColorRow();
    dniUserUpdate = undefined;
    showUsers();
}
function deleteUser(dni) {
    fetch(url + "/users/" + dni, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });
}
function updateColorRow() {
    row.classList.remove('o-stroke-green');
    row.classList.add('o-stroke-orange');
    row.querySelector('.form__title').innerHTML = "Actualizar";
}
function saveColorRow() {
    row.classList.remove('o-stroke-orange');
    row.classList.add('o-stroke-green');
    row.querySelector('.form__title').innerHTML = "Registrar";
}
function isEmpty(check) {
    return check.length == 0;
}
function cleanShowUsers() {
    var showUsers = document.querySelector('.show-users');
    while (showUsers.firstChild) {
        showUsers.removeChild(showUsers.firstChild);
    }
}
function getDni(event) {
    return event.path[4].children[3].querySelector('.form__input').value;
}
function setTitle(value) {
    document.querySelector('.o-title-user').textContent = value;
}
