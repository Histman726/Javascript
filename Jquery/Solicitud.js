$.ajax({
            url: 'https://www.universal-tutorial.com/api/getaccesstoken',
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "api-token": "F9tL9JN91nO_HKZts294qgTT7EOJ0-nBSaddCqjoRAHPe4UInR5LFUEt_jwmSJK5IaQ",
                "user-email": "ivantovar26.hist@gmail.com"
            },
            success: function (data) {
                if(data.auth_token){
                    var auth_token = data.auth_token;
                    $.ajax({
                        url: 'https://www.universal-tutorial.com/api/countries/',
                        method: 'GET',
                        headers: {
                            "Authorization": "Bearer " + auth_token,
                            "Accept": "application/json"
                        },
                        success: function (data) {
                            var countries = data;
                            var comboCountries = "<option value=''>Seleccionar</option>";
                            countries.forEach(element => {
                                comboCountries += '<option value="' + element['country_name'] + '">' + element['country_name']+'</option>';
                            });

                            $("#Countries").html(comboCountries);

                            // State list

                            $("#Countries").on("change", function(){
                                var country = this.value;
                                $.ajax({
                                    url: 'https://www.universal-tutorial.com/api/states/' + country,
                                    method: 'GET',
                                    headers: {
                                        "Authorization": "Bearer " + auth_token,
                                        "Accept": "application/json"
                                    },
                                    success: function (data) {
                                        var states = data;
                                        var comboStates = "<option value=''>Seleccionar</option>";
                                        states.forEach(element => {
                                            comboStates += '<option value="' + element['state_name'] + '">' + element['state_name'] + '</option>';
                                        });
                                        $("#Estados").html(comboStates);

                                        // City list

                                        $("#Estados").on("change", function () {
                                            var state = this.value;

                                            $.ajax({
                                                url: 'https://www.universal-tutorial.com/api/cities/' + state,
                                                method: 'GET',
                                                headers: {
                                                    "Authorization": "Bearer " + auth_token,
                                                    "Accept": "application/json"
                                                },
                                                success: function (data) {
                                                    var cities = data;
                                                    var comboCities = "<option value=''>Seleccionar</option>";
                                                    cities.forEach(element => {
                                                        comboCities += '<option value="' + element['city_name'] + '">' + element['city_name'] + '</option>';
                                                    });
                                                    $("#Ciudades").html(comboCities);
                                                    if (thisClass.cityValue) { $("#Ciudades").val(thisClass.cityValue).trigger("change"); }

                                                },
                                                error: function (e) {
                                                    console.log("Error al obtener countries: " + e);
                                                }
                                            });

                                        });

                                        if (thisClass.stateValue) { $("#item-details-stateValue").val(thisClass.stateValue).trigger("change"); }

                                    },
                                    error: function (e) {
                                        console.log("Error al obtener countries: " + e);
                                    }
                                });

                            });

                            if (thisClass.countryValue) { $("#item-details-countryValue").val(thisClass.countryValue).trigger("change"); }

                        },
                        error: function (e) {
                            console.log("Error al obtener countries: " + e);
                        }
                    });

                }
            },
            error: function (e) {
                console.log("Error al obtener countries: " + e);
            }
        });