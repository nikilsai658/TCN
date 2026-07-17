import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './login/login';
import { ForgotPassword } from './forgot-password/forgot-password';
import { SelectInstitutions } from './select-institutions/select-institutions';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Courses } from './courses/courses';
import { PageNotFound } from './page-not-found/page-not-found';
import { Course } from './course/course';
import { CourseDash } from './course-dash/course-dash';
import { Java } from './java/java';
import { Python } from './python/python';
import { Dsa } from './dsa/dsa';
import { Sql } from './sql/sql';
import { Vedios } from './vedios/vedios';
import { Comp } from './assignments/comp';
import { AssignmentEditor } from './assignment-editor/assignment-editor';
import { Leaderboard } from './leaderboard/leaderboard';
import { Projects } from './projects/projects';
import { Profile } from './profile/profile';
import { Helpsupport } from './helpsupport/helpsupport';
import { Certificate } from './certificate/certificate';
import { CodeEditorComponent } from './code-editor-component/code-editor-component';
import { Faqs } from './faqs/faqs';
export const routes: Routes = [
    {
        path:'',redirectTo:'dashboard',pathMatch:'full'
    },
    {
        path:'auth',component:Auth,children:[
            {
                path:'',redirectTo:'select-institution',pathMatch:'full'
            },
            {
                path:'login',component:Login
            },
            {
                path:'forgot-password',component:ForgotPassword
            },
            {
                path:'select-institution',component:SelectInstitutions
            }
        ]
    },
    {
        path:'dashboard',component:Dashboard ,children:[
            {
                path:'',redirectTo:'home',pathMatch:'full'
            },
            {
                path:'home',component:Home
            }
        ]
    },
    {
        path:'courses',component:Courses,children:[
            {
                path:'',redirectTo:'courseDash',pathMatch:'full'
            },
            {
                path:'course',component:Course
            },
            {
                path:'courseDash',component:CourseDash
            },
            {
                path:'java',component:Java
            },
            {
                path:'python',component:Python
            },
            {
                path:'dsa',component:Dsa
            },
            {
                path:'sql',component:Sql
            },
            {
                path:'vedios',component:Vedios
            },
            {
                path:'comp',component:Comp
            },
             {
               path: 'editor', component: AssignmentEditor
             },
             {
                path:'leaderboard',component:Leaderboard
             },
             {
                path:'project',component:Projects
             },
             {
                path:'profile',component:Profile
             },
             {
                path:'help-support', component:Helpsupport
             },
             {
                path:'certificate', component:Certificate
             },
             {
                path:'codeeditor',component:CodeEditorComponent
             },
             {
                path:'faqs', component:Faqs
             }
        ]
    },
    {
                path:'**',component:PageNotFound
   }    
];
