(function ($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function () {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function () {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function () {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function () {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: true,
		autoplay: true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop: true,
		margin: 15,
		dots: true,
		nav: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			}
		}
	});

	var getSkillsTemplate = function (skills) {
		let template = "";
		$.each(skills, function (index, value) {
			template += value;
			template += ((index + 1) < skills.length) ? "<span class='bullet'>•</span>" : "";
		});
		return template;
	}
	var getCurrentOrganization = function (organizations) {
		let organization = null;
		$.each(organizations, function (index, value) {
			if (value.IsPresent) {
				organization = value;
			}
		});
		return organization;
	}

	var getOrganizationsTemplate = function (organizations) {
		let template = "";
		$.each(organizations, function (index, value) {
			var offsetClass = "";
			if (index == 0) {
				if (organizations.length == 3)
					offsetClass = "col-md-offset-2"
				if (organizations.length == 2)
					offsetClass = "col-md-offset-3"
			}
			template += "<div class='col-md-3 " + offsetClass + " col-xs-6 work'>" +
				"<img class='img-responsive' src='" + value.OrganizationImageUrl + "' alt=''>" +
				"<div class='overlay'></div><div class='work-content'>" +
				"<span>" + value.Name + "</span>" +
				"<h3>" + value.Role + "</h3>" +
				"<div class='work-link'>" +
				"<a href='" + value.OrganizationUrl + "' target='_blank'><i class='fa fa-paw fa-2x'></i></a>" +
				"</div></div ></div>";
		});
		return template;
	}

	var getProfessionalExperienceTemplate = function (detail) {
		var currentOrganization = getCurrentOrganization(detail.Organizations);
		var skillsTemplate = getSkillsTemplate(detail.Skills);
		var organizationsTemplate = getOrganizationsTemplate(detail.Organizations);
		return "<div class='col-md-12'>" +
			"<h3 class='text-center'>" + detail.JobProfile + "</h3>" +
			"<div class='skills'>" + skillsTemplate + "</div>" +
			"<p class='text-center mm-padding'>" + detail.JobDescription + "</p>" +
			"<div class='pull-left'><b>Current Organization</b><span class='bullet'>•</span>" +
			currentOrganization.Name
			+ "</div><div class='pull-right'><b>Period</b><span class='bullet'>•</span>" +
			currentOrganization.PeriodFrom + " - Present </div><div class='mm-padding'>" + organizationsTemplate + "</div></div>";
	}
	var getGitRepositoryTemplate = function (gitRepositories) {
		let template = "";
		$.each(gitRepositories, function (index, value) {
			var offsetClass = "";
			if (index == 0) {
				if (gitRepositories.length == 3)
					offsetClass = "col-md-offset-2"
				if (gitRepositories.length == 2)
					offsetClass = "col-md-offset-3"
			}
			template += "<div class='col-md-3 " + offsetClass + " col-xs-6 work'>" +
				"<img class='img-responsive' src='" + value.ImageUrl + "' alt=''>" +
				"<div class='overlay'></div><div class='work-content'>" +
				"<span>" + value.SourceType + "</span>" +
				"<h3>" + value.Title + "</h3>" +
				"<div class='work-link'>" +
				"<a href='" + value.SourceUrl + "' target='_blank'><i class='fa fa-github fa-2x'></i></a>" +
				"</div></div ></div>";
		});
		return template;
	}
	var getGithubRepositoriesTemplate = function (detail) {
		var skillsTemplate = getSkillsTemplate(detail.Skills);
		var projectsTemplate = getGitRepositoryTemplate(detail.Projects);
		return "<div class='col-md-12'>" +
			"<h3 class='text-center'>" + detail.ProfileTitle + "</h3>" +
			"<div class='skills'>" + skillsTemplate + "</div>" +
			"<p class='text-center mm-padding'>" + detail.ProfileDescription + "</p>" +
			projectsTemplate + "</div></div>";
	}
	var getCertificationTemplate = function (detail) {
		var skillsTemplate = getSkillsTemplate(detail.Skills);
		let template = "<h5 class='text-center certificate-head'>" + detail.Title + "</h5>" +
			"<div class='skills'>" + skillsTemplate + "</div>" +
			"<p class='text-center mm-padding'>" + detail.CourseDescription + "</p>" +
			"<div class='pull-left'><b>University</b><span class='bullet'>•</span>" +
			detail.CourseOrganization
			+ "</div><div class='pull-right'><b>Period</b><span class='bullet'>•</span>" +
			detail.PeriodFrom + " - " + detail.PeriodTo
			+ "</div>";
		return template;

	}
	var getCertificationsTemplate = function (details) {
		let template = "<div class='col-md-12 mm-padding'><h3 class='text-center'>Certifications</h3>";
		$.each(details, function (index, value) {
			let courseTemplate = getCertificationTemplate(value);
			template += courseTemplate;
		});
		template += "</div>";
		return template;
	}
	// Dynamic Data Binding
	$.getJSON("https://abhinav2127.github.io/data/portfolio.json", function (data) {
		console.log(data);
		var portfolioContainer = $("#portfolioContainer");
		//do what you want with data
		if (data.ProfessionalExperience) {
			$(portfolioContainer).append(getProfessionalExperienceTemplate(data.ProfessionalExperience));
		}
		if (data.PersonalProjects) {
			$(portfolioContainer).append(getGithubRepositoriesTemplate(data.PersonalProjects));
		}
		if (data.InternshipProgram) {
			$(portfolioContainer).append(getCertificationsTemplate(data.InternshipProgram));
		}
	});

	$("#sendMail").on("click", function () {
		var subject = $("#mailSubject").val();
		var message = $("#mailMessage").val();
		if (subject != "" && message != "")
			window.open('mailto:abhinav.social58@gmail.com?subject=' + subject + '&body=' + message);
	});

})(jQuery);
