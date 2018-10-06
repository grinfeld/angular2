import {Headers} from '@angular/http';
import {User} from "./users/user";
import {AuthUser} from "./users/auth-user";

export const CONFIG = {
    jsonHeader: new Headers({'Content-Type': 'application/json'}),
    formHeader: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
    ROLES: {
      NA: 0,
      VISITOR: 1,
      AUTHOR: 2,
      ADMIN: 4
    },
    VISIBILITY: {
      NA: -1,
      HIDDEN: 0,
      VISIBLE: 1
    },
    createEmptyUser(): User {
      let u = new User();
      u.type = this.ROLES.VISITOR;
      return u;
    },
    loggedIn(user: User | AuthUser): boolean {
      return user && user.type > CONFIG.ROLES.VISITOR;
    },
    errorHandler(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    },
    myDatePickerOptions: {
      todayBtnTxt: 'Сегодня',
      dateFormat: 'dd/mm/yyyy',
      firstDayOfWeek: 'mo',
      sunHighlight: false,
      height: '34px',
      width: '270px',
      inline: false,
      editableMonthAndYear: false,
      minYear: 1980,
      indicateInvalidDate: true,
      showDateFormatPlaceholder: true,
      selectionTxtFontSize: '16px',
      dayLabels: {su: 'Вс', mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб'},
      monthLabels: { 1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декекабрь' }
    },
    settings: {
      SITE_TITLE_DEFAULT: "Site",
      SITE_TITLE_NAME: "site_name"
    },
    mysqlTimeStampToDate(timestamp) {
      //function parses mysql datetime string and returns javascript Date object
      //input has to be in this format: 2007-06-05 15:26:02
      var regex=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;
      var parts=timestamp.replace(regex,"$1 $2 $3 $4 $5 $6").split(' ');
      return new Date(parts[0],parts[1]-1,parts[2],parts[3],parts[4],parts[5]);
    },
    SERVER: "http://localhost:2080/litclub/"
  }
  ;
