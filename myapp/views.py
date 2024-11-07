from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from .forms import SignUpForm, LoginForm
from .forms import ContactForm
from django.http import JsonResponse
from django.core.mail import send_mail
from .models import  ContactMessage


def home(request):
    return render(request,'index.html')

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}.")
                return redirect('home')
            else:
                messages.error(request, "Invalid username or password. carefully check your logins")
        else:
            messages.error(request, "Invalid username or password. carefully check your logins")
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return JsonResponse({'home/': '/'})
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})

def logout_view(request):
    logout(request)
    messages.info(request, "You have successfully logged out.")
    return redirect('home')

def contact_instructor(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save to the database
            ContactMessage.objects.create(
                name=form.cleaned_data['name'],
                email=form.cleaned_data['email'],
                message=form.cleaned_data['message']
            )

            return JsonResponse({'success': True, 'message': 'Your message has been sent!'})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid form data'})

    return render(request, 'contact.html', {'form': ContactForm()})


def python_page(request):
    return render(request, 'python_page.html')

def javascript_page(request):
    return render(request, 'javascript_page.html')

def java_page(request):
    return render(request, 'JAVA.HTML')

def byu_page(request):
    return render(request, 'byu.html')

def cpp_page(request):
    return render(request, 'cpp_page.html')

def basic_syntax(request):
    return render(request, 'basic-syntax.html')

def operator(request):
    return render(request, 'operator-page.html')

def controlflow(request):
    return render(request,'controlflow.html')

def functions(request):
    return render(request, 'functions.html')

def Data_structures(request):
    return render(request, 'data_structures.html')

def modules_packages(request):
    return render(request,'modules_packages.html')

def file_handling(request):
    return render(request,'file_handling.html')

def exception_handling(request):
    return render(request, 'exception_handling.html')

def OOP(request):
    return render(request, 'OOP.html')

def libraries_frameworks(request):
    return render(request,'libraries_frameworks.html')

def intro_to_JS(request):
    return render(request,'intro_to_js.html')

def JS_BASIC(request):
    return render(request,'js_basic.html')

def dom_manipulation(request):
    return render(request,'dom_manipulation.html')

def JS_eventhandling(request):
    return render(request,'JS_eventhandling.html')

def JS_functions(request):
    return render(request,'JS_functions.html')

def JS_oop(request):
    return render(request,'JS_oop.html')

def JS_async(request):
    return render(request, 'JS_async.html')

def JS_es6(request):
    return render(request,'JS_es6.html')

def JS_tools(request):
    return render(request,'JS_tools.html')

def JS_projects(request):
    return render(request,'JS_projects.html')

def Java_intro(request):
    return render(request,'Java_intro.html')

def Java_setup(request):
    return render(request,'Java_setup.html')

def Java_basic_syntax(request):
    return render(request,'Java_basic.html')

def Java_helloworld(request):
    return render(request,'Java_helloworld.html')

def Java_errorh(request):
    return render(request,'Java_errorh.html')

def Java_arrays(request):
    return render(request,'Java_arrays.html')

def Java_OOP(request):
    return render(request,'Java_OOP.html')

def Java_collection(request):
    return render(request,'Java_collection_fram.html')

def Java_Questions(request):
    return render(request,'Java_Questions.html')




