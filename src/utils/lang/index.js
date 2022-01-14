const LANG_TRANS = {
    ur: {
        locale: "ur",
        messages: {
            BREADCRUMB: {
                INVOICE: "Pay with bSecure"
            },
            // Phone Screen
            PHONE: {
                TITLE: "آپ کا فون نمبر",
                SUB_TITLE: "لاگ ان کرنے کےلئے اپنا فون نمبر درج کریں",
                PLACEHOLDER: "فون نمبر",
                BREADCRUMB: {
                    HEADING: "فون",
                },
            },
            // OTP Screen
            OTP: {
                RESEND: {
                    TITLE: "دوبارہ بھیجیں"
                },
                TITLE: "او ٹی پی",
                SUB_TITLE: "آپ کے {ٹیلی نار} نمبر {0345 111 1111} پر ایک پیغام بھیجا گیا ہے۔ ،",
                // SUB_TITLE: "آپ کے {ٹیلی نار} نمبر {0345 111 1111} پر ایک پیغام بھیجا گیا ہے۔ اگر آپ {ٹیلی نار} پر نہیں ہیں تو ،",
                CLICK_HERE: "",
                // otp_click_here: "یہاں کلک کریں۔",
            },
            ADDRESS: {
                BREADCRUMB: {
                    HEADING: "پتہ",
                },
                TITLE: "آپ کا پتہ",
                ADD:{
                    TITLE: "آپ کا پتہ",
                    PLACEHOLDER: "اپنا شپنگ کا پتہ نیچے درج کریں",
                },
                LIST:{
                    TITLE: "آپ کے پتے",
                    // PLACEHOLDER: "Enter your shipping address below",
                },
                EDIT:{
                    TITLE: "آپ کا پتہ",
                    PLACEHOLDER: "ترجیحی پتہ منتخب کریں",
                },
                SET_DEAFULT: "بطور ڈیفالٹ ایڈریس سیٹ کریں",
                DELIVERY: {
                    MODE_NOT_AVAILABLE: "ڈیلیوری دستیاب نہیں ہے",
                },
                FORM: {
                    LABEL: {
                        NAME: "نام",
                        EMAIL: "ای میل",
                        COUNTRY: "ملک",
                        PROVINCE: "صوبہ",
                        CITY: "شہر",
                        AREA: "علاقہ",
                        ADDRESS: "پتہ",
                        ZIPCODE: "زپ کوڈ",
                        MAP: "گوگل میپس میں تلاش کریں",
                    },
                    PLACEHOLDER: {
                        NAME: "آپ کا نام",
                        EMAIL: "آپ کی ای میل",
                        COUNTRY: "ملک",
                        PROVINCE: "صوبہ",
                        CITY: "شہر",
                        AREA: "علاقہ",
                        ADDRESS: "پتہ",
                        ZIPCODE: "زپ کوڈ",
                    }
                },
            },
            LOCATION: {
                PERMISION: {
                    ALLOW: {
                        HEADING: "مقام کو جاری رکھنے کی اجازت دیں",
                        TEXT: "اس آرڈر کو درست طریقے سے ڈیلیور کرنے کے لیے ہمیں آپ کا مقام جاننے کی ضرورت ہے",
                    },
                },
                MANDATORY: "مقام کی اجازت لازمی ہے",
                ENABLE: "براؤزر کے مقام تک رسائی کو فعال کریں",
                UPDATE: "اجازت کو اپ ڈیٹ کرنے کے لیے کلک کریں",
                USE_CURRENT_LOCATION: "موجودہ مقام کا استعمال کریں",
                EDIT_LOCATION: "مقام میں ترمیم کریں",
                MANUAL_LOCATION: "نیچے دستی طور پر پتہ درج کریں",
                CONFIRM_LOCATION: "مقام کی تصدیق کریں۔",
            },
            // Shipping Screen
            SHIPPING: {
                BREADCRUMB: {
                    HEADING: "شپنگ",
                },
                LIST:{
                    TITLE: "شپنگ کا طریقہ",
                    PLACEHOLDER:  "ترجیحی شپنگ کا طریقہ منتخب کریں",
                },
            },
            // Payment Screen
            PAYMENT: {
                BREADCRUMB: {
                    HEADING: "ادائيگی",
                },
                LIST:{
                    TITLE: "ادائیگی کی قسم",
                    PLACEHOLDER:  "ترجیحی ادائیگی کا طریقہ",
                },
                VALIDATION:{
                    IS_REQUIRED: "پہلے ادائیگی کا طریقہ منتخب کریں",
                    EP_REQUIRED: "پہلے ایزی پیسہ موبائل نمبر درج کریں",
                    INVALID_PHONE: "درست فون نمبر درج کریں",
                    WALLET_REQUIRED: "پہلے والیٹ اکاؤنٹ نمبر درج کریں",
                    BANK_ACCOUNT_REQUIRED: "پہلے بینک اکاؤنٹ نمبر درج کریں",
                    EMAIL_REQUIRED: "ای میل کی فیلڈ کو پر کرنا ضروری ہے",
                    PHONE_REQUIRED:  "فون نمبر کی فیلڈ کو پر کرنا ضروری ہے",
                },
                LABEL:{
                    //Placeholder fields
                    CARD: {
                        NUMBER:  "کارڈ نمبر",
                        EXPIRY_DATE:"تاریخ تنسیخ",
                        CVV:  "سی وی وی",
                        NAME: "کارڈ کا نام",
                    }
                }
            },
            VALIDATIONS: {
                IS_REQUIRED: "اس کو پر کرنا ضروری ہے",
            },
            REVIEW: {
                BUTTON: {
                    VIEW: "آرڈر کی تفصیلات دیکھیے"
                },
                PLACEHOLDER: {
                    CNIC: "شناختی کارڈ نمبر"
                }
            },
            // Cart Screen
            cart_breadcrumb_heading: "کارٹ",
            cart_placeholder: "تقریبا مکمل",

            // Checkout Info Item
            delivery_address_heading: "ڈیلیوری کا پتہ",
            shipment_method_heading: "شپنگ کا طریقہ",
            payment_method_heading: "ادائيگی",
            order_detail_review: "اپنے آرڈر کا جائزہ لیں یا واؤچر شامل کریں، پھر تصدیق کریں۔",

            //Order Sucess Messages
            order_number: "آرڈر نمبر",
            call_by_cr:
                "مرچنٹ {مرچنٹ نام} پر آرڈر دینے کا شکریہ۔ ہمیں آپ کا {آرڈر نمبر} موصول ہوچکا ہے۔ ہماری کمپنی کا ایک نمائندہ آپ کو آپ کی آرڈر کی تصدیق کے لئے جلد ہی کال کریں گے",
            order_placed:
                "مرچنٹ {مرچنٹ نام} پر آرڈر دینے کا شکریہ۔ ہمیں آپ کا {آرڈر نمبر} موصول ہوچکا ہے۔",
            call_by_robot:
                "مرچنٹ {مرچنٹ نام} پر آرڈر دینے کا شکریہ۔ ہمیں آپ کا {آرڈر نمبر} موصول ہوچکا ہے۔ آپ کو جلد ہی {0900-78601} سے آرڈر کی تصدیق کے لئے کال موصول ہوگی",

            //Order OTC Sucess Messages
            order_processing:
                "۔{مرچنٹ نام} پر آرڈر دینے کا شکریہ۔ آپ کے آرڈر پر پر عملدرآمد کردیا گیا ہے",
            transation_reciept_heading: "آپ کو ادا کرنا ہے",
            transation_reciept_sub_heading: "رقم ادا کرنے کا باقی وقت",
            transation_reciept_id: "ٹرانزیکشن کی شناخت",
            transation_reciept_text:
                "اپنی آس پاس کی {او ٹی سی} کی دکان پر جائیں اور مذکورہ بالا ٹرانزیکشن کی شناخت کے خلاف اگلے {وقت} میں اپنے آرڈر کی ادائیگی جمع کروائیں",
          
            //APG
            bank_account_number: "بینک اکاؤنٹ نمبر",
            placeholder_bank_account_number: "اپنا بینک اکاؤنٹ نمبر درج کریں",
            wallet_account_number: "والیٹ اکاؤنٹ نمبر",
            placeholder_wallet_account_number: "اپنا والیٹ اکاؤنٹ نمبر درج کریں",
            //Placeholder fields
            voucher_placeholder: "واؤچر کوڈ درج کریں",
            voucher_label: "واؤچر",
            //Headings
            dbt_message:
                "براہ کرم ادائیگی کا اسکرین شاٹ {مرچنٹ ای میل} پر بھیجیں یا {مرچنٹ نمبر} اس نمبر پر واٹس ایپ کریں۔",
            dbt_bank_name: "بینک کا نام:۔",
            dbt_account_title: "اکاؤنٹ کا عنوان :۔",
            dbt_iban_number: "ابن نمبر:۔",
            dbt_account_number: "اکاؤنٹ نمبر:۔",
            dbt_branch_code: "برانچ کوڈ:۔",
            contact_detail: "رابطہ کی تفصیلات",

            bank_otp_code_label: "اپنا بینک او ٹی پی کوڈ درج کریں",
            bank_otp_code_placeholder: "اپنا بینک او ٹی پی کوڈ درج کریں",
            sms_otp_code_label: "ایس ایم ایس او ٹی پی کوڈ ",
            sms_otp_code_placeholder: "اپنا ایس ایم ایس او ٹی پی کوڈ درج کریں",
            email_otp_code_label: "ای میل او ٹی پی کوڈ ",
            email_otp_code_placeholder: "اپنا ای میل او ٹی پی کوڈ درج کریں",
            bank_and_email_otp_heading: "بینک اور ای میل او ٹی پی",
            bank_otp_heading: "بینک او ٹی پی",
            email_otp_heading: "ای میل او ٹی پی",
            bank_otp_placeholder:
                "آپ کے رجسٹرڈ نمبر پر آپ کے بینک کے ذریعہ ایک او ٹی پی بھیجا گیا ہے ، جاری رکھنے کے لئے نیچے او ٹی پی کوڈ درج کریں۔",
            bank_and_email_otp_placeholder:
                "آپ کے رجسٹرڈ نمبر اور ای میل پر آپ کے بینک کے ذریعہ ایک او ٹی پی بھیجا گیا ہے ، جاری رکھنے کے لئے نیچے او ٹی پی کوڈ درج کریں۔",

            card_details_heading: "کارڈ کی تفصیلات",
            card_details_placeholder: "نیچے اپنے کارڈ کی تفصیلات درج کریں",

            qp_details_heading: "قسٹ پے کی تفصیلات",
            qp_details_placeholder: "نیچے قسٹ پے کی تفصیلات درج کریں",

            // General
            quantity_keyword: "مقدار",
            browser_location_enable_text:
                "براؤزر کی ترتیبات سے براہ کرم مقام کو فعال کریں۔",
            save_card_details: "اپنے کارڈ کی تفصیلات محفوظ کریں",
            continue_as_user: "بطور {بطور} جاری رکھیں",
            not_as_user: "۔{بطور}  نہیں ہیں؟",
            one_tap_login: "ایک ٹیپ کے ساتھ لاگ ان",
            map_text: "نقشہ",
            find_geo_location: "جغرافیائی مقام تبدیل کرنے کے لئے یہاں کلک کریں",
            found_geo_location: "آپ کا جغرافیائی مقام معلوم ہوگیا ہے",
            mandatory_pin_placeholder: "جی پی ایس مقام لازمی ہے",
            suggested_language_text: "تجویز کردہ زبانیں اور علاقہ جات",
            select_region_text: "زبان اور علاقہ منتخب کریں",
            default_placeholder: "مستقبل کے لئے محفوظ کریں",
            default_number_placeholder: "اپنا بی سیکیور کا نمبر استعمال کریں",
            // get_my_location_btn: "اپنا مقام حاصل کریں",
            get_my_location_btn: "نقشہ",
            return_to_merchant_heading: "پر واپس جائيں",
            awaiting_payment_heading: "ادائیگی کے منتظر",
            success_heading: "کامیاب آرڈر",
            calling_you_heading: "آپ کو کال کی جارہی ہے",
            processing_heading: "پروسیسنگ",
            processing_text:
                "آپ کی ادائيگی کی پروسیسنگ جاری ہے۔ آپ کو او ٹی پی پن کے اندراج کے لئے تھرڈ پارٹی ویب سائٹ پر لے جایا جاسکتا ہے۔",
            failure_heading: "آرڈر ناکام",
            out_of_tries_heading: "کوششیں ختم",
            powered_by: "معاونت فراہم کنندہ",
            add_new_btn: "نیا شامل کریں",
            save_btn: "محفوظ کریں",
            cancel_btn: "منسوخ کریں",
            back_btn: "پیچھے",
            next_btn: "آگے",
            apply_btn: "نافذ کریں",
            applied_btn: "نافذ ہو گیا ہے",
            discount_off: "بچت ",
            edit_btn: "ترمیم کریں",
            retry_btn: "دوبارہ کوشش کریں",
            select_btn: "ترجیحی",
            voucher_text: "واؤچر",
            total_text: "کل رقم",
            sub_total_text: "سب ٹوٹل",
            discount_text: "رعایت",
            service_charges_text: "کام کا معاوضہ",
            buy_now: "آرڈر کی تصدیق کریں ",
            processing_btn: "آرڈر پروسیسنگ ",
            failure_text: "آپ کی ادائيگي ناکام رہی۔ ادائيگی کا مختلف طریقہ آزمائيں۔",
            out_of_failure_text:
                "آپ کی ادائيگی ناکام رہی۔ آپ کو دوبارہ سٹور پر لے جایا جائے گا۔",
            cnic_requirement_message:
                "حکومت پاکستان کی ضروریات کے مطابق، براہ کرم اپنا قومی شناختی کارڈ نمبر درج کریں۔",

            delete_confirmation_text: "کیا آپ واقعی حذف کرنا چاہتے ہیں؟",
            yes_btn: "جی ہاں",


            //Validation Msgs
            otp_validation_message: "او ٹی پی کم از کم 6 ہندسوں کا ہونا چاہئے",
            bank_otp_validation_message: "او ٹی پی کم از کم 4 ہندسوں کا ہونا چاہئے",

            name_field_max_validation: "نام کا فیلڈ 50 حروف سے زیادہ نہیں ہونا چاہئے",
            email_field_max_validation:
                "ای میل کا فیلڈ 50 حروف سے زیادہ نہیں ہونا چاہئے",
            invalid_email_address: "غلط ای میل ایڈریس",
            address_field_min_validation:
                " پتہ کی فیلڈ کم از کم 5 حروف کا ہونا چاہئے",
            address_field_max_validation:
                "پتہ کی فیلڈ 199 حروف سے زیادہ نہیں ہونا چاہئے",
            address_selection_required: "پہلے پتہ منتخب کریں",
            address_save_required:
                "براہ کرم ایڈریس محفوظ کریں یا کوئی دوسرا منتخب کریں",
            cnic_validation_message: "یہ فیلڈ {فیلڈ}  ہندسوں کے برابر ہونا چاہئے",
            invalid_card_message: "آپ نے ایک غلط کارڈ داخل کیا ہے",
            invalid_expiry_date_message: "غلط ختم ہونے کی تاریخ",
            expired_card_error_message:
                "معذرت! آپ کے کارڈ کی میعاد ختم ہوگئی ہے۔ براہ کرم کوئی مختلف کارڈ آزمائیں",
            limit_validation_message: "یہ فیلڈ {فیلڈ} حروف سے {کم} نہیں ہوسکتی ہے",
            minimum_limit_text: "کم",
            maximum_limit_text: "زیادہ",
            //Terms & Condition Popup

            nift_success_cc_trans:
                "کریڈٹ کارڈ کے ذریعہ ادائیگی کامیابی کے ساتھ مکمل ہوئی",
            nift_success_acc_trans:
                "بینک اکاؤنٹ کے ذریعہ ادائیگی کامیابی کے ساتھ مکمل ہوئی",
            VERIFICATION: {
                POPUP_TITLE:
                "براہ کرم اگلی بار تیز تر آرڈر پراسیسنگ کے لئے اپنے اکاؤنٹ کی تصدیق کریں",
                SUCCESS_BTN: "اپنے اکاؤنٹ کی تصدیق کریں",
            },
            PAYMENT_PROTECTION:{
                TOOLTIP_TEXT: "بی سیکور کے ذریعے تمام ادائیگی کے احکامات ہمارے ادائیگیوں کے تحفظ کے پروگرام کے تحت آتے ہیں۔ مزید جاننے کے لیے وزٹ کریں۔",
                TOOLTIP_LINK: "www.bsecure.pk/protect",
            },
            CART: {
                UPTO: "تک ",
                SUB_TOTAL: "سب ٹوٹل",
                TOTAL: "ٹوٹل",
                DISCOUNT: "رعایت",
                OFF: "بچت",
                SHIPPING: "شپنگ",
                SERVICE_CHARGES: "کام کا معاوضہ",
                BILLING_INFO: "بلنگ کی تفصیلات دیکھیں",
                PLACEHOLDER: {
                    TERMS: {
                        TITLE: "شرائط و ضوابط ",
                        PREPEND_PLACEHOLDER: "آپ کا آرڈر مکمل کرنے کا مطلب ہے کہ آپ بی سیکیور کی",
                        APPEND_PLACEHOLDER: "سے متفق ہیں",
                    }
                },
                PAYMENT_PROTECTION: "ادائیگی کے تحفظ کی ضمانت ہے۔",
            },
            DIALOG: {
                MODAL: {
                    LANGUAGE: {

                    },
                    ORDER_EXPIRED: {
                        HEADING: "آپ کے آرڈر کی میعاد ختم ختم ہو چکی ہے۔",
                        PLACEHOLDER: "یہ آرڈر لنک اب استعمال کرنے کے لیے درست نہیں ہے۔",
                    }
                }
            },
            FOOTER: {
                TERMS: "شرائط و ضوابط",
                PRIVACY: "رازداری کی پالیسی"
            },
            DIALOG_CONTENT: {
                TERMS: {
                    HEADING: "شرائط و ضوابط",
                    CONTENT_1: "ہم مسلسل ہماری خدمات کو بہتر بنانے کے لئے نئی ٹیکنالوجی اور خصوصیات ترقی کر رہے ہیں. مثال کے طور پر ، ہم مصنوعی ذہانت میں سرمایہ کاری کرتے ہیں جو اسپیم اور مالویئر کا پتہ لگانے اور اسے مسدود کرنے اور آپ کو بیک وقت ترجمے جیسی جدید خصوصیات مہیا کرنے کیلئے مشین لرننگ کا استعمال کرتے ہیں۔ اس مستقل بہتری کے ایک حصے کے طور پر ، ہم بعض اوقات خصوصیات اور افعال کو شامل یا ختم کردیتے ہیں ، ہماری خدمات کی حدود میں اضافہ یا کمی کرتے ہیں ، اور نئی خدمات کی پیش کش کرنا شروع کردیتے ہیں یا پرانی خدمات کی پیش کش بند کردیتے ہیں۔",
                    CONTENT_2:
                        "اگر ہم ایسی مادی تبدیلیاں کرتے ہیں جو ہماری خدمات کے آپ کے استعمال پر منفی اثر ڈالتے ہیں یا اگر ہم کسی پیش کش کی پیش کش بند کردیتے ہیں تو ، ہم آپ کو مناسب پیشگی اطلاع دیں گے اور بی ایسیکور اکاؤنٹ سے آپ کے مواد کو برآمد کرنے کا موقع فراہم کریں گے ، سوائے ضروری حالات میں۔ جیسا کہ بدسلوکی کی روک تھام ، قانونی تقاضوں کا جواب دینا یا سیکیورٹی اور آپریبلٹی کے امور کو حل کرنا۔",

                },
                PRIVACY: {
                    SECTION_1: {
                        HEADING: "رازداری کی پالیسی",
                        CONTENT_1: "بی سیکور پرائوٹ لمیٹڈ میں ، ہم آپ کی ذاتی معلومات کے بارے میں آپ کے کنسرن کو سمجھتے ہیں ، ہمیں اس کی بھی پرواہ ہے۔ اس طرح ، ہم یقینی بناتے ہیں کہ آپکی فراہم کردہ معلومات کی حفاظت کریں اور آپکی پراؤسی  کا احترام کریں جب آپ بی سیکور کی ویب سائٹ پر لاگ ان ہوں گے ۔",
                        CONTENT_2: "یہ رازداری کی پالیسی آپ کی ہماری ویب سائٹ کے استعمال سے متعلق آپ کے ذاتی طور پر قابل شناخت معلومات (نام ، رابطہ نمبر ، میلنگ اور پوسٹل ایڈریس) کو جمع کرنے ، سے متعلق آپ کے رازداری کے حقوق پر حکمرانی کرتی ہے۔ یہ معلومات الیکٹرانک ڈیٹا بیس میں محفوظ کی گئی ہے ، جو صرف بی سیکور پرائوٹ لمیٹڈ کمپنی کی ویب سائٹ کے استعمال کے لئے ہے۔ یہ رازداری کی پالیسی سائٹ اور خدمات کے ذریعہ فراہم کردہ خدمات پر لاگو ہوتی ہے"
                    },
                    SECTION_2: {
                        HEADING: "ہم کون سی ذاتی معلومات اکٹھا کرتے ہیں؟",
                        CONTENT_1: "جب آپ ویب سائٹ پر ہمارے ساتھ کوئی آرڈر دیتے ہو تو ہم مختلف معلومات اکٹھا کرسکتے ہیں۔ آپ کا ڈیٹا ویب سائٹ پر دیئے گئے آپ کے آرڈر پر کاڑوائی کرنے میں ہماری سہولت کیلئے ہے۔ ہم آپ کی ذاتی معلومات بھی اکٹھا کرسکتے ہیں جس میں آپ کے نام ، جنس ، تاریخ پیدائش ، ای میل ایڈریس ، پوسٹل ایڈریس ، ٹیلیفون نمبر ، ادائیگی کی تفصیلات ، ادائیگی کارڈ کی تفصیلات یا بینک اکاؤنٹ کی تفصیلات شامل ہوسکتی  ہے۔",
                        CONTENT_2: "ہم آپ کی معلومات کو اپنے ساتھ اپنے اکاؤنٹ میں اندراج کرنے ، عمل کرنے اور ویب سائٹ پر اپنا آرڈر دیتے وقت ادائیگیوں کی تصدیق کرنے کے لئے بھی استعمال کرسکتے ہیں ، ہماری ویب سائٹ سے ڈیٹا ڈاؤن لوڈ کرنے کا آڈٹ کرسکتے ہیں ، صفحات کی ترتیب اور ​ یا مواد کو بہتر بنائیں گے۔ ہماری ویب سائٹ اور ان کو صارفین کی مرضی کے مطابق بنائیں گے ، ہماری ویب سائٹ پر آنے والوں کی شناخت کریں ، ہمارے صارفین کے اعدادوشمار پر تحقیق کریں ، آپ کو ایسی معلومات بھیجیں جو آپ کو لگتا ہے کہ آپ کو مفید مل سکتا ہے یا جس سے آپ نے ہماری مصنوعات اور خدمات کے بارے میں معلومات بھی فراہم کی ہیں۔ آپ نے اشارہ کیا ہے کہ آپ کو ان مقاصد کے لئے رابطہ کرنے پر کوئی اعتراض نہیں ہے۔ آپ کی رضامندی حاصل کرنے کے ساتھ مشروط ہم دوسرے مصنوعات اور خدمات کی تفصیلات کے ساتھ ای میل کے ذریعے آپ سے رابطہ کرسکتے ہیں۔ اگر آپ ترجیح دیتے ہیں کہ ہم سے کوئی مارکیٹنگ مواصلات حاصل نہ کریں تو آپ کسی بھی وقت آپٹ آؤٹ کرسکتے ہیں۔"
                    },
                    SECTION_3: {
                        HEADING: "ہم آپ کا ڈیٹا کیسے جمع کرتے ہیں؟",
                        CONTENT: "بی سیکور (پی وی ٹی) لمیٹڈ میں ، ہم آپ کی ذاتی معلومات کے بارے میں آپ کی فکر کو سمجھتے ہیں ، ہمیں اس کی بھی پرواہ ہے۔ اس طرح ، ہم یقینی بناتے ہیں کہ فراہم کردہ معلومات کی حفاظت کریں اور رازداری کے ل for آپ کی درخواستوں کا احترام کریں جب آپ 'www.bsecure.pk' ویب سائٹ پر لاگ ان ہوں گے (اس کے بعد سے ویب سائٹ کے طور پر حوالہ دیا جائے گا)۔.",
                        LIST: {
                            ITEM_1: "•     آن لائن رجسٹر ہوں یا ہماری ویب سائٹ پر درج ہماری مصنوعات میں سے کسی کے لئے آرڈر دیں۔",
                            ITEM_2: "•     رضاکارانہ طور پر ایک گراہک مکمل کریں یا جب آپ ہمیں اپنی رائے فراہم کریں۔",
                            ITEM_3: "•     اپنے براؤزر کی کوکیز کے ذریعے ہماری ویب سائٹ تک رسائی حاصل کریں",
                            ITEM_4: "•     ہماری کمپنی آپ کا ڈیٹا بالواسطہ درج ذیل وسائل سے وصول کرسکتی ہے۔",
                        }
                    },
                    SECTION_4: {
                        HEADING: "ہم آپ کی معلومات کی حفاظت کیسے کریں گے؟",
                        CONTENT_1: "یہ رازداری کی پالیسی آپ کی ہماری ویب سائٹ کے استعمال سے متعلق آپ کے ذاتی طور پر قابل شناخت معلومات (نام ، رابطہ نمبر ، میلنگ اور پوسٹل ایڈریس) کو جمع کرنے ، اسٹوریج اور جمع کرنے سے متعلق آپ کے رازداری کے حقوق پر حکمرانی کرتی ہے۔ یہ معلومات الیکٹرانک ڈیٹا بیس میں محفوظ کی گئی ہے ، جو صرف نجی نجی کمپنی کی ویب سائٹ کے استعمال کے لئے ہے۔ یہ رازداری کی پالیسی سائٹ اور خدمات کے ذریعہ فراہم کردہ خدمات پر لاگو ہوتی ہے",
                        CONTENT_2: "عام کاروبار کے دوران ہم آپ کی کچھ ذاتی معلومات اپنے کارپوریٹ فیملی میں اور تیسری پارٹی کے ساتھ جو ہماری طرف سے کام کر رہے ہیں یا قابل اطلاق قانون کے ذریعہ اجازت یا ضرورت کے مطابق بانٹ سکتے ہیں۔",
                        CONTENT_3: "ہم اس بات کو یقینی بنانے کے لئے معقول کوشش کرتے ہیں کہ جب آپ ہماری ویب سائٹ پر ہوں تو آپ کی ذاتی معلومات کو محفوظ رہے.",
                    },
                    SECTION_5: {
                        HEADING: "بی سیکور پرائوٹ لمیٹڈ آپ کی معلومات کو کس طرح استعمال کرتا ہے؟",
                        CONTENT_1: "بی سیکور پرائوٹ لمیٹڈ میں ، ہم آپ کی ذاتی معلومات کے بارے میں آپ کی فکر کو سمجھتے ہیں ، ہمیں اس کی بھی پرواہ ہے۔ اس طرح ، ہم اس بات کو یقینی بناتے ہیں کہ ہم فراہم کردہ معلومات کی حفاظت کریں اور رازداری کے ل یوور آپ کی درخواستوں کا احترام کریں ـ",
                        // "The security of your personal information is a high priority for BE SECURE (PVT) LIMITED. BE SECURE (PVT) LIMITED uses your personal information to enhance its services and personalize your shopping experience. At BE SECURE (PVT) LIMITED, we do not sell or rent the customer information to any third parties except to provide BE SECURE (PVT) LIMITED service or as explained below.",
                        LIST: {
                            ITEM_1: "•     بی سیکور پرائوٹ لمیٹڈ  اپنے صارفین کے ڈیٹا جیسےکے ڈیموگرافکس کا استعمال کرسکتی ہے اور مختلف مقاصد کے لئے مشتہرین ، شراکت داروں اور دیگر کو انکشاف کرسکتی ہے۔.",
                            ITEM_2: "•    بی سیکور پرائوٹ لمیٹڈ  کچھ سرگرمیوں جیسے پیکجوں کی فراہمی اور ڈیٹا انیلیسیس کے لئے دوسری کمپنیوں کی خدمات حاصل کرسکتی ہیں۔ ان کمپنیوں کو اپنی سرگرمیاں انجام دینے کے لے آپ کی ذاتی معلومات تک رسائی حاصل ہوسکتی ہے۔",
                        },
                        CONTENT_2: "ہماری ویب سائٹس ڈیٹا ٹرانسپورٹ کے دوران آپ کی ذاتی معلومات کی حفاظت کے لئے انکرپشن کی ٹکنالوجی کا استعمال کرتی ہیں."
                    }
                }
            },
            PAYMENT_METHODS: {
                INSTRUCTIONS: {
                    EASYPAISA: {
                        TEXT_1: "ابھی اپنا ایزی پیسہ اکاؤنٹ محفوظ کریں",
                        TEXT_2: "یقینی بنائیں کہ آپ کا ایزی پیسہ اکاؤنٹ فعال ہے",
                        TEXT_3:
                            "کامیاب ادائیگی سے مستقبل میں استعمال کیلئے آپ کا ایزی پیسہ اکاؤنٹ خود بخود محفوظ ہوجائے گا",
                        TEXT_4: "اپنی ادائیگی کی تصدیق کرنے  کا طریقہ",
                        TEXT_4_1:
                            "ٹیلی نار کے صارفین: اپنے 5 ہندسوں والے پن کو یو ایس ایس ڈی پرامپٹ میں داخل کریں",
                        TEXT_4_2:
                            "دوسرے نیٹ ورکس کیلئے: اپنے ایزی پیسہ ایپ میں لاگ ان کریں > 'میرے منظوریوں' میں ادائیگی کی منظوری کے لئے اوپر بائیں مینو پر ٹیپ کریں۔",
                    },
                    JAZZCASH: {
                        TEXT_1: "ابھی اپنا جیز کیش اکاؤنٹ محفوظ کریں",
                        TEXT_2: "یقینی بنائیں کہ آپ کا جیز کیش اکاؤنٹ فعال ہے",
                        TEXT_3:
                            "کامیاب ادائیگی سے مستقبل میں استعمال کیلئے آپ کا جیز کیش اکاؤنٹ خود بخود محفوظ ہوجائے گا",
                        TEXT_4: "اپنی ادائیگی کی تصدیق کرنے  کا طریقہ",
                        TEXT_4_1:
                            "موبی لنک کے صارفین: اپنے 5 ہندسوں والے پن کو یو ایس ایس ڈی پرامپٹ میں داخل کریں",
                        TEXT_4_2:
                            "دوسرے نیٹ ورکس کیلئے: اپنے جیز کیش ایپ میں لاگ ان کریں > 'میرے منظوریوں' میں ادائیگی کی منظوری کے لئے اوپر بائیں مینو پر ٹیپ کریں۔",
                    }
                },
                SUGGESTION_LIST: {
                    EASYPAISA: "اپنا پرانا ایسی پیسہ موبائل اکاؤنٹ استعمال کریں",
                    JAZZCASH: "اپنا پرانا ایسی پیسہ موبائل اکاؤنٹ استعمال کریں",
                },
                PROCESSING: {
                    EASYPAISA: {
                        INTER_NETWORK: "ٹیلی نار کے صارفین",
                        INTER_NETWORK_INSTRUCTIONS:
                            "اپنے فون کو غیر مقفل کریں اور اپنے 5 ڈیجیٹ پن کو ادائیگی کے یو ایس ایس ڈی میں پیش کریں۔",
                        INTRA_NETWORK: "دوسرے نیٹ ورک",
                        INTRA_NETWORK_INSTRUCTIONS:
                            "اپنی ایزی پیسہ ایپ میں لاگ ان کریں۔ ادائیگی کی تصدیق  کے لئے،  'میرے منظوریوں' میں ادائیگی کی منظور پر جائیں اور اپنی ادائیگی کی منظوری کریں ۔",
                    },
                    JAZZCASH: {
                        INTER_NETWORK: "موبی لنک کے صارفین",
                        INTER_NETWORK_INSTRUCTIONS:
                            "اپنے فون کو غیر مقفل کریں اور اپنے 5 ڈیجیٹ پن کو ادائیگی کے یو ایس ایس ڈی میں پیش کریں۔",
                        INTRA_NETWORK: "دوسرے نیٹ ورک",
                        INTRA_NETWORK_INSTRUCTIONS:
                            "اپنی جیز کیش ایپ میں لاگ ان کریں۔ ادائیگی کی تصدیق  کے لئے،  'میرے منظوریوں' میں ادائیگی کی منظور پر جائیں اور اپنی ادائیگی کی منظوری کریں ۔",
                    },
                }
            }
        },
    },
    en: {
        locale: "en-US",
        messages: {
            BREADCRUMB: {
                INVOICE: "Pay with bSecure"
            },
            // Phone Screen
            PHONE: {
                TITLE: "Your Phone Number",
                SUB_TITLE: "Enter your phone number to login",
                PLACEHOLDER: "Phone Number",
                BREADCRUMB: {
                    HEADING: "Phone",
                },
            },
            // OTP Screen
            OTP: {
                RESEND: {
                    TITLE: "Resend OTP"
                },
                TITLE: "OTP",
                SUB_TITLE: "A text has been sent to your number {phone_number}.",
                // SUB_TITLE: "A text has been sent to your {network_name} number {phone_number}.  If you are not on {network_name}.",
                CLICK_HERE: "",
            },
            ADDRESS: {
                BREADCRUMB: {
                    HEADING: "Address",
                },
                TITLE: "Your Address",
                ADD:{
                    TITLE: "Your Address",
                    PLACEHOLDER: "Enter your shipping address below",
                },
                LIST:{
                    TITLE: "Your Addresses",
                    // PLACEHOLDER: "Enter your shipping address below",
                },
                EDIT:{
                    TITLE: "Edit Address",
                    PLACEHOLDER: "Select your preferred address",
                },
                SET_DEAFULT: "Set as Default Address",
                DELIVERY: {
                    MODE_NOT_AVAILABLE: "Delivery Unavailable",
                },
                FORM: {
                    LABEL: {
                        NAME: "Name",
                        EMAIL: "Email",
                        COUNTRY: "Country",
                        PROVINCE: "Province",
                        CITY: "City",
                        AREA: "Area",
                        ADDRESS: "Address",
                        ZIPCODE: "Zip code",
                        MAP: "Search Google Maps",
                    },
                    PLACEHOLDER: {
                        NAME: "Enter your name",
                        EMAIL: "Enter your email",
                        COUNTRY: "Country",
                        PROVINCE: "Province",
                        CITY: "City",
                        AREA: "Area",
                        ADDRESS: "Enter your address",
                        ZIPCODE: "Zip code",
                    }
                }
            },
            LOCATION: {
                PERMISION: {
                    ALLOW: {
                        HEADING: "Allow location to continue",
                        TEXT: "We need to know your location in order to deliver this order precisely",
                    },
                },
                MANDATORY: "Location Permission is mandatory",
                ENABLE: "Enable browser location access",
                UPDATE: "Click to update permission",
                USE_CURRENT_LOCATION: "Use current location",
                EDIT_LOCATION: "Edit location",
                MANUAL_LOCATION: "Manually enter address below",
                CONFIRM_LOCATION: "Confirm Location",
            },
            // Shipping Screen
            SHIPPING: {
                BREADCRUMB: {
                    HEADING: "Shipping",
                },
                LIST:{
                    TITLE: "Shipping Type",
                    PLACEHOLDER: "Select preferred mode of shipment",
                },
            },
            // Payment Screen
            PAYMENT: {
                BREADCRUMB: {
                    HEADING: "Payment",
                },
                LIST:{
                    TITLE: "Payment Type",
                    PLACEHOLDER:  "Select preferred mode of payment",
                },
                VALIDATION:{
                    IS_REQUIRED: "Select payment method first",
                    EP_REQUIRED: "Enter easy paisa mobile number first",
                    INVALID_PHONE: "Enter valid phone number",
                    WALLET_REQUIRED: "Enter your wallet account number first",
                    BANK_ACCOUNT_REQUIRED: "Enter your bank account number first",
                    EMAIL_REQUIRED: "Email field is required.",
                    PHONE_REQUIRED: "Phone number field is required."
                },
                LABEL:{
                    //Placeholder fields
                    CARD: {
                        NUMBER: "Card Number",
                        EXPIRY_DATE: "Expiry Date",
                        CVV: "CVV",
                        NAME: "Card Name",
                    }
                }
            },
            VALIDATIONS: {
                IS_REQUIRED: "This field is required",
            },
            REVIEW: {
                BUTTON: {
                    VIEW: "View Order"
                },
                PLACEHOLDER: {
                    CNIC: "CNIC Number"
                }

            },
            // Cart Screen
            cart_breadcrumb_heading: "Cart",
            cart_placeholder: "Almost Done",

            // Cart Item
            delivery_address_heading: "Delivery address",
            shipment_method_heading: "Shipping Method",
            payment_method_heading: "Payment Method",
            order_detail_review: "Review your order or add a voucher, then confirm.",

            //Order Sucess Messages
            order_number: "Order # ",
            call_by_cr:
                "Thank you for placing an order at {merchant_name}. Your {order_number} has been placed. One of our company represenative will call you shortly for order confirmation!	",
            order_placed:
                "Thank you for placing an order at {merchant_name}. Your {order_number} has been successfully placed!		",
            call_by_robot:
                "Thank you for placing an order at {merchant_name}. Your {order_number} has been placed. You will receive an order confirmation call shortly from {calling_number}",

            //Order OTC Sucess Messages
            order_processing:
                "Thank you for placing an order at {merchant_name}. Your {order_number} has been processed.",
            transation_reciept_heading: "YOU HAVE TO PAY",
            transation_reciept_sub_heading: "Remaining time to pay",
            transation_reciept_id: "Transaction Id",
            transation_reciept_text:
                "Visit your nearby {payment_gateway_name} shop and submit your order payment in next {time} against the above",
            //APG
            bank_account_number: "Bank Account Number",
            placeholder_bank_account_number: "Enter your bank account number",
            wallet_account_number: "Wallet Account Number",
            placeholder_wallet_account_number: "Enter your wallet account number",
            
            //Placeholder fields
            voucher_placeholder: "Enter voucher code",
            voucher_label: "Voucher",
            dbt_message:
                "Please send the payment screenshot to <b>{merchant_support_email} </b> or Whatsapp on <b>{merchant_whatsapp_no}</b>.",
            dbt_bank_name: "Bank Name:",
            dbt_account_title: "Account Title:",
            dbt_iban_number: "IBAN Number:",
            dbt_account_number: "Account Number:",
            dbt_branch_code: "Branch Code:",
            contact_detail: "Contact Details",

            bank_otp_code_label: "Bank OTP Code",
            bank_otp_code_placeholder: "Bank OTP Code",
            sms_otp_code_label: "Sms OTP Code",
            sms_otp_code_placeholder: "Sms OTP Code",
            email_otp_code_label: "Email OTP Code",
            email_otp_code_placeholder: "Email OTP Code",
            bank_otp_heading: "Bank OTP",
            bank_and_email_otp_heading: "Bank & Email OTP",
            email_otp_heading: "Email OTP",
            bank_otp_placeholder:
                "A text has been sent by your bank to your registered number, enter the code below to continue.",
            bank_and_email_otp_placeholder:
                "A text has been sent by your bank to your registered email and number, enter the code below to continue.",

            card_details_heading: "Card Details",
            card_details_placeholder: "Enter your card details below",

            qp_details_heading: "Qisst Pay",
            qp_details_placeholder: "Enter your details below",

            // General
            quantity_keyword: "QTY",
            browser_location_enable_text:
                "Please enable location from the browser settings.",
            save_card_details: "Save your card details",
            continue_as_user: "Continue as {customer_name}",
            not_as_user: "Not {customer_name}",
            one_tap_login: "One-Tap Login",
            map_text: "map",
            find_geo_location: "Click here to change Location.",
            found_geo_location: "Your location has been detected",
            mandatory_pin_placeholder: "GPS Location is mandatory",
            suggested_language_text: "Suggested languages and regions",
            select_region_text: "Choose a language and region",
            default_placeholder: "Set as Default Payment Method",
            default_number_placeholder: "Use your bSecure number",
            get_my_location_btn: "Get my location	",
            return_to_merchant_heading: "Return to",
            success_heading: "Success",
            awaiting_payment_heading: "Awaiting Payment",
            calling_you_heading: "Calling you",
            processing_heading: "Processing",
            processing_text:
                "Your payment is being processed, you may be directed to a third party to enter your OTP pin.",
            failure_heading: "Failure",
            out_of_tries_heading: "Out of tries",
            powered_by: "Powered by",
            add_new_btn: "Add New",
            save_btn: "Save",
            cancel_btn: "Cancel",
            back_btn: "Back",
            next_btn: "Next",
            apply_btn: "Apply",
            applied_btn: "Applied",
            discount_off: "Off",
            edit_btn: "Edit",
            retry_btn: "Retry",
            select_btn: "Select",
            voucher_text: "Voucher",
            total_text: "Total",
            sub_total_text: "Subtotal",
            discount_text: "Discount",
            service_charges_text: "Service Charges",
            buy_now: "Confirm Order",
            processing_btn: "Processing",
            failure_text:
                "Your payment was unsuccessful. Try again with some other method.",
            out_of_failure_text:
                "Your payment was not successful and you will be redirected back to the store.",
            cnic_requirement_message:
                "As per the requirements of Government of Pakistan, Please enter your National identity card number above",

            delete_confirmation_text: "Are you sure you want to delete?",
            yes_btn: "Yes",


            //Validation Msgs
            otp_validation_message: "OTP should be atleast 6 digits",
            bank_otp_validation_message: "OTP should be atleast 4 digits",
            name_field_max_validation:
                "The name field should not be greater than 50 characters",
            email_field_max_validation:
                "The email field should not be greater than 50 characters",
            invalid_email_address: "Invalid email address",
            address_field_min_validation:
                "This address field should be atleast 5 characters",
            address_field_max_validation:
                "The address field should not be greater than 190 characters",
            address_selection_required: "Select address first",
            address_save_required: "Please save address or select another one",
            cnic_validation_message: "This field should be equal to {x} digits",
            invalid_card_message: "You have entered an invalid card",
            invalid_expiry_date_message: "Invalid expiry date",
            invalid_phone_number: "Enter valid phone number",
            expired_card_error_message:
                "Sorry! your card has been expired. Please try a different card",
            limit_validation_message:
                "The {name} field may not be {limit} than {digits} characters",
            minimum_limit_text: "less",
            maximum_limit_text: "greater",

            nift_success_cc_trans:
                "Transaction processed successfully through credit card",
            nift_success_acc_trans:
                "Transaction processed successfully through account",
            VERIFICATION: {
                POPUP_TITLE: "Please verify your account for faster processing next time.",
                SUCCESS_BTN: "Verify your account",
            },
            FOOTER: {
                TERMS: "Terms & Conditions",
                PRIVACY: "Privacy"
            },
            DIALOG: {
                MODAL: {
                    LANGUAGE: {

                    },
                    ORDER_EXPIRED: {
                        HEADING: "Oops! your order has expired.",
                        PLACEHOLDER: "Please try again.",
                    }
                }
            },
            PAYMENT_PROTECTION:{
                TOOLTIP_TEXT: "All prepayment orders through bSecure are covered by our payment protection program. To learn more visit",
                TOOLTIP_LINK: "www.bsecure.pk/protect",
            },
            CART: {
                UPTO: " UPTO ",
                SUB_TOTAL: "Sub Total",
                TOTAL: "Total",
                DISCOUNT: "Discount",
                OFF: "Off",
                SHIPPING: "Shipping",
                SERVICE_CHARGES: "Service Charges",
                BILLING_INFO: "See Billing Details",
                PLACEHOLDER: {
                    TERMS: {
                        TITLE: "terms and conditions",
                        PREPEND_PLACEHOLDER: "By completing your order you agree to abide by bSecure's ",
                        APPEND_PLACEHOLDER: "",
                    }
                },
                PAYMENT_PROTECTION: "Payment Protection Guaranteed",
            },
            DIALOG_CONTENT: {
                TERMS: {
                    HEADING: "Terms & Conditions",
                    CONTENT_1: "We’re constantly developing new technologies and features to improve our services. For example, we invest in artificial intelligence that uses machine learning to detect and block spam and malware, and to provide you with innovative features like simultaneous translations. As part of this continual improvement, we sometimes add or remove features and functionalities, increase or decrease limits to our services, and start offering new services or stop offering old ones.",
                    CONTENT_2:
                        "If we make material changes that negatively impact your use of our services or if we stop offering a service, we’ll provide you with reasonable advance notice and an opportunity to export your content from your bSecure Account using bSecure Checkout, except in urgent situations such as preventing abuse, responding to legal requirements or addressing security and operability issues.",
                },
                PRIVACY: {
                    SECTION_1: {
                        HEADING: "Privacy Policy",
                        CONTENT_1: "At BE SECURE (PVT) LIMITED, we understand your concern about your personal information, we care about it too. As such, we ensure we safeguard the information provided and honor your requests for confidentiality when you log in to www.bsecure.pk Website (henceforth shall be referred to as “Website”).",
                        CONTENT_2: "This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. This Privacy Policy also explains the steps we have taken to secure your personal information. And this Privacy Policy explains your options regarding the collection, use and disclosure of your personal information. By visiting the Site directly or through another site, you accept the practices described in this Policy."
                    },
                    SECTION_2: {
                        HEADING: "What personal information do we collect?",
                        CONTENT_1: "We may collect various information while you are placing an order with us at the Website. Your Data is collected, stored and processed in order to facilitate us in processing your order placed on the Website. We may also collect your personal information which may include but is not limited to your name, gender, date of birth, email address, postal address, telephone number, payment details, payment card details or bank account details.",
                        CONTENT_2: "We may also use your information in order to register your account with us, process and verify the payments that you make while placing your order on the Website, audit the downloading of data from our website, improve the layout and/or content of the pages of our website and customize them for users, identify visitors on our website, carry out research on our users' demographics, send you information we think you may find useful or which you have requested from us, including information about our products and services, provided you have indicated that you have not objected to being contacted for these purposes. Subject to obtaining your consent we may contact you by email with details of other products and services. If you prefer not to receive any marketing communications from us, you can opt out at any time."
                    },
                    SECTION_3: {
                        HEADING: "How do we collect your data?",
                        CONTENT: "At BE SECURE (PVT) LIMITED, we understand your concern about your personal information, we care about it too. As such, we ensure we safeguard the information provided and honor your requests for confidentiality when you log in to www.bsecure.pk Website (henceforth shall be referred to as “Website”).",
                        LIST: {
                            ITEM_1: "•     Register online or place an orderfor any of our productslisted on our website.",
                            ITEM_2: "•     Voluntarily complete a customersurvey or when you provide us with your feedback.",
                            ITEM_3: "•     Access our website through yourbrowser’s cookies.",
                            ITEM_4: "•     Our Company may receive your dataindirectly from the following resource.",
                        }
                    },
                    SECTION_4: {
                        HEADING: "How do we protect your information?",
                        CONTENT_1: "This privacy policy governs your privacy rights regarding our collection, storage and accumulation of your personally identifiable information (name, contact number, mailing and postal address) concerning your use of our website. This information is stored in an electronic database, which is for BE SECURE (PVT) LIMITED’s website use only. This privacy policy applies to the Site and services provided by BE SECURE (PVT) LIMITED.",
                        CONTENT_2: "In the normal course of business we may share some of your personal information within our corporate family and with third parties acting on our behalf or as permitted or required by applicable law.",
                        CONTENT_3: "We make reasonable efforts to ensure that your personal information is protected while you are on our Website.",
                    },
                    SECTION_5: {
                        HEADING: "How does BE SECURE (PVT)LIMITED use your information?",
                        CONTENT_1: "The security of your personal information is a high priority for BE SECURE (PVT) LIMITED. BE SECURE (PVT) LIMITED uses your personal information to enhance its services and personalize your shopping experience. At BE SECURE (PVT) LIMITED, we do not sell or rent the customer information to any third parties except to provide BE SECURE (PVT) LIMITED service or as explained below.",
                        LIST: {
                            ITEM_1: "•     BE SECURE (PVT) LIMITED may use the customer data such as demographics and disclose to advertisers, partners, and other for various purposes.",
                            ITEM_2: "•     BE SECURE (PVT) LIMITED may hire other companies for certain activities like delivering packages and data analysis. These companies may have access to your personal information to perform their activities.",
                        },
                        CONTENT_2: "Our Web Sites use encryption technology to protect your personal information during data transport. Such technology encrypts ordering information such as your name, address, and credit card number."
                    }
                }
            },
            PAYMENT_METHODS: {
                INSTRUCTIONS: {
                    EASYPAISA: {
                        TEXT_1: "Save your Easypaisa account now!",
                        TEXT_2: "Ensure your Easypaisa account is Active",
                        TEXT_3: "Successful transactions will automatically save your Easypaisa account for future use",
                        TEXT_4: "To confirm your payment:",
                        TEXT_4_1: "Telenor customers: Input your 5-digit PIN into the USSD prompt ",
                        TEXT_4_2: "For other networks: Login to your Easypaisa app > Tap on the top-left menu to approve the payment in 'My Approvals'",
                    },
                    JAZZCASH: {
                        TEXT_1: "Save your JazzCash account now!",
                        TEXT_2: "Ensure your JazzCash account is Active",
                        TEXT_3: "Successful transactions will automatically save your JazzCash account for future use",
                        TEXT_4: "To confirm your payment:",
                        TEXT_4_1: "Telenor customers: Input your 5-digit PIN into the USSD prompt ",
                        TEXT_4_2: "For other networks: Login to your JazzCash app > Tap on the top-left menu to approve the payment in 'My Approvals'",
                    }
                },
                SUGGESTION_LIST: {
                    EASYPAISA: "Previously used easypaisa mobile account",
                    JAZZCASH: "Previously used JazzCash mobile account",
                },
                PROCESSING: {
                    EASYPAISA: {
                        INTER_NETWORK: "Telenor Customers",
                        INTER_NETWORK_INSTRUCTIONS:
                            "Unlock your phone and enter your 5-digit PIN in the USSD prompt to pay.",
                        INTRA_NETWORK: "Other Networks",
                        INTRA_NETWORK_INSTRUCTIONS:"Log-in to your easypaisa app and go to My Approvals to confirm payment."
                    },
                    JAZZCASH: {
                        INTER_NETWORK: "JazzCash Customers",
                        INTER_NETWORK_INSTRUCTIONS:
                            "Unlock your phone and enter your 5-digit PIN in the USSD prompt to pay.",
                        INTRA_NETWORK: "Other Networks",
                        INTRA_NETWORK_INSTRUCTIONS:"Log-in to your JazzCash app and go to My Approvals to confirm payment."
                    },
                }
            }
        },
    },
}

const SUPPORTED_LANG = [
    {
        locale: "ur",
        language: "Urdu",
        region: "(اردو)",
        country: "Pakistan",
        lng_priority: 0,
        dir: "rtl",
        language_icon: "اردو",
        locale_switch: "en"
    },
    {
        locale: "en",
        language: "English",
        region: "(UK)",
        country: "United Kingdom",
        lng_priority: 1,
        dir: "ltr",
        language_icon: "English",
        locale_switch: "ur"
    },
    // {
    //   locale: "ar",
    //   language: "Arabic",
    //   region: "(عربی)",
    //   country: "Saudi Arab",
    //   lng_priority: 0,
    // },
    // {
    //   locale: "en-us",
    //   language: "English",
    //   region: "(US)",
    //   country: "United States",
    //   lng_priority: 0,
    // },
    // {
    //   locale: "ch",
    //   language: "Chinese",
    //   region: "",
    //   country: "China",
    //   lng_priority: 0,
    // },
]

export {
    LANG_TRANS,
    SUPPORTED_LANG
};