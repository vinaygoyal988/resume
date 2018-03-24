function basicInfo(){
    $.ajax({url : "data/basic.json", success: function(result){
        var info = result;
        $(".basic-info-placeholder").remove();
        $("#avatar-div").html("<img src='images/"+info.avatar+"' style='width : 100%;'/>");
        $("#profile-name").html(info.name);
        $("#basic-info-div").append('<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.work+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.address+'</p>');
        $("#basic-info-div").append('<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+info.email+'</p>');
        for(var i=0; i<info.mobiles.length; i++){
            var value = '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><span class="flag-icon flag-icon-'+info.mobiles[i].country+'"></span> '+info.mobiles[i].number+'</p>';
            $("#basic-info-div").append(value);
        }
    }});
}

function languages(){
    $.ajax({url : "data/languages.json", success : function(result){
        var info = result;
        $(".languages-placeholder").remove();
        for(var i=0; i<info.length; i++){
            var value = '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="font-size: 14px; line-height: 22px; height:22px; width:'+info[i].percent+'%">'+info[i].language+'</div>'+
                        '</div>';
            $("#languages-div").append(value);
        }
    }});
}

function majorSkills(){
    $.ajax({url : "data/majorskill.json", success : function(result){
        var info = result;
        $(".major-skill-placeholder").remove();
        for(var i=0; i<info.length; i++){
            var value = '<p>'+info[i].title+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:'+info[i].percent+'%">'+info[i].percent+'%</div>'+
                        '</div>';
            $("#major-skills-div").append(value);
        }
    }});
}

function workInfo(){
    $.ajax({url : "data/work.json", success : function(result){
        var info = result;
        $(".work-placeholder").remove();
        for(var i=0; i<info.length; i++){ 
            var duration = "";
            if(i == 0){
                duration = info[i].duration+' - <span class="w3-tag w3-teal w3-round">Current</span>';
            }else{
                duration = info[i].duration;
            }  
            var value = '<div class="w3-container">'+
                            '<h5><b>'+info[i].role+'</b></h5>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-building fa-fw w3-margin-right"></i>'+info[i].company+'</h6>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+duration+'</h6>'+
                            '<p>'+info[i].description+'</p>'+
                            '<hr>'+
                        '</div>';
            $("#work-div").append(value);
        }
    }});
}

function hobbies(){
    $.ajax({url : "data/hobbies.json", success : function(result){
        var info = result;
        $(".languages-placeholder").remove();
        for(var i=0; i<info.length; i++){
            var value = '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="font-size: 14px; line-height: 22px; height:22px; width:'+info[i].percent+'%">'+info[i].hobby+'</div>'+
                        '</div>';
            $("#hobbies-div").append(value);
        }
    }});    
}

function educationInfo(){
    $.ajax({url : "data/education.json", success : function(result){
        var info = result;
        $(".education-placeholder").remove();
        for(var i=0; i<info.length; i++){   
            var value = '<div class="w3-container">'+
                            '<h5><b>'+info[i].level+'</b></h5>'+
                            '<p class="w3-text-teal">'+info[i].trade+'</p>'+
                            '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+info[i].duration+'</h6>'+
                            '<p><i class="fa fa-institution w3-text-teal fa-fw w3-margin-right"></i>'+info[i].college+'</p>'+
                            '<hr>'+
                        '</div>';
            $("#education-div").append(value);
        }
    }});
}

function allSkills(){
    $.ajax({url : "data/allskill.json", success : function(result){
        var info = result;
        $(".all-skill-placeholder").remove();
        for(var i=0; i<info.length; i++){   
            var value = '<p>'+info[i].skill+'</p>'+
                        '<div class="w3-light-grey w3-round-xlarge w3-small w3-margin">'+
                            '<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:'+info[i].percent+'%">'+info[i].percent+'%</div>'+
                        '</div>'; 
            if(i%2 ==0){
                $("#skill-left-div").append(value);
            }else{
                $("#skill-right-div").append(value);
            }
        }
    }});
}

function socialMedias(){
    $.ajax({url : "data/social.json", success : function(result){
        var info = result;
        $(".social-media-placeholder").remove();
        for(var i=0; i<info.length; i++){   
            var value = '<a href="'+info[i].link+'" target="_blank"> &nbsp; <i class="fa s-m-i fa-3x fa-'+info[i].icon+' w3-hover-opacity"></i> &nbsp; </a>';
            $("#social-media-div").append(value);
        }
    }});
}

function setInfo(){
    basicInfo();
    languages();
    majorSkills();
    hobbies();
    workInfo();
    educationInfo();
    allSkills();
    socialMedias();
}

$(document).ready(function(){
    setInfo();
});
