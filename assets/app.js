(function () {
  'use strict';

  var DATA = {
    /** Các tỉnh/thành vùng Đồng bằng sông Cửu Long (Tây Nam Bộ) */
    regions: [
      { id: 'an_giang', label: 'An Giang' },
      { id: 'bac_lieu', label: 'Bạc Liêu' },
      { id: 'ben_tre', label: 'Bến Tre' },
      { id: 'ca_mau', label: 'Cà Mau' },
      { id: 'can_tho', label: 'Cần Thơ' },
      { id: 'dong_thap', label: 'Đồng Tháp' },
      { id: 'hau_giang', label: 'Hậu Giang' },
      { id: 'kien_giang', label: 'Kiên Giang' },
      { id: 'long_an', label: 'Long An' },
      { id: 'soc_trang', label: 'Sóc Trăng' },
      { id: 'tien_giang', label: 'Tiền Giang' },
      { id: 'tra_vinh', label: 'Trà Vinh' },
      { id: 'vinh_long', label: 'Vĩnh Long' }
    ],
    riceVarieties: [
      { id: 'om18', label: 'OM18' },
      { id: 'om5451', label: 'OM5451' },
      { id: 'dai_thom_8', label: 'Đài Thơm 8' },
      { id: 'st25', label: 'ST25' },
      { id: 'om4900', label: 'OM4900' },
      { id: 'khac', label: 'Giống khác (ghi ở ô dưới)' }
    ],
    growthStages: [
      { id: 'gd_ma', label: 'GĐ mạ (0–15 ngày)' },
      { id: 'gd_de_nhanh', label: 'GĐ đẻ nhánh (15–35 ngày)' },
      { id: 'gd_dong_tro', label: 'GĐ đòng – trổ (30–55 ngày)' },
      { id: 'gd_tro_chin', label: 'GĐ trổ – chín (55–90 ngày)' },
      { id: 'thu_hoach', label: 'Thu hoạch' }
    ],
    ricePests: [
      { id: 'ngo_doc', label: 'Ngộ độc hữu cơ / phèn' },
      { id: 'dao_on', label: 'Đạo ôn' },
      { id: 'sau_cuon_la', label: 'Sâu cuốn lá' },
      { id: 'ray_nau', label: 'Rầy nâu' },
      { id: 'vi_khuan', label: 'Vi khuẩn' },
      { id: 'khac', label: 'Khác (ghi rõ)' }
    ],
    /** Mật độ sâu/bệnh (theo từng loại trên từng giống) */
    pestMatDo: [
      { id: 'thap', label: 'Thấp' },
      { id: 'tb', label: 'Trung bình' },
      { id: 'cao', label: 'Cao' },
      { id: 'rat_cao', label: 'Rất cao' }
    ],
    vegVarieties: [
      { id: 'ot', label: 'Ớt' },
      { id: 'dua_leo', label: 'Dưa leo' },
      { id: 'cai_thia', label: 'Cải thìa' },
      { id: 'rau_muong', label: 'Rau muống' },
      { id: 'ca_chua', label: 'Cà chua' },
      { id: 'hoa_cu', label: 'Hoa cúc / hoa kiểng' },
      { id: 'khac', label: 'Loại khác (ghi ở ô dưới)' }
    ],
    vegGrowthStages: [
      { id: 'veg_cay_con', label: 'Cây con / mạ / ươm' },
      { id: 'veg_ra_la', label: 'Ra lá / sinh trưởng' },
      { id: 'veg_mang_trai', label: 'Mang trái / nuôi quả' },
      { id: 'veg_thu_hoach', label: 'Thu hoạch' }
    ],
    vegPests: [
      { id: 'tho', label: 'Sâu tơ / sâu xanh' },
      { id: 'ray_xanh', label: 'Rầy xanh / rầy muội' },
      { id: 'benh_thoi', label: 'Bệnh thối / thán thư' },
      { id: 'nhen_do', label: 'Nhện đỏ' },
      { id: 'sau_an_la', label: 'Sâu ăn lá' },
      { id: 'khac', label: 'Khác (ghi rõ)' }
    ],
    fruitVarieties: [
      { id: 'xoai', label: 'Xoài' },
      { id: 'sau_rieng', label: 'Sầu riêng' },
      { id: 'nhan', label: 'Nhãn' },
      { id: 'buoi', label: 'Bưởi' },
      { id: 'cam_quyt', label: 'Cam / quýt' },
      { id: 'khac', label: 'Loại khác (ghi ở ô dưới)' }
    ],
    fruitGrowthStages: [
      { id: 'fr_cay_con', label: 'Cây con / trồng mới' },
      { id: 'fr_ra_hoa', label: 'Ra hoa / đậu quả non' },
      { id: 'fr_nu_qua', label: 'Nuôi quả / phình trái' },
      { id: 'fr_chin_lot', label: 'Chín lót / gần thu' },
      { id: 'fr_thu_hoach', label: 'Thu hoạch chính' }
    ],
    fruitPests: [
      { id: 'bo_tri', label: 'Bọ trĩ' },
      { id: 'ray', label: 'Rầy các loại' },
      { id: 'sau_duc', label: 'Sâu đục thân / đục quả' },
      { id: 'than_thu', label: 'Thán thư / nấm bệnh' },
      { id: 'duoi_ong', label: 'Đuôi ong / sâu cuốn' },
      { id: 'khac', label: 'Khác (ghi rõ)' }
    ],
    /** Giá cố định theo mục (legacy; form dùng gia_items trên từng entry) */
    priceItemsByGroup: {
      lua: [],
      rau_hoa: [],
      cay_an_trai: []
    },
    /** Loại giá (mỗi loại cây có thể thêm nhiều dòng, mỗi dòng chọn một loại) */
    priceKindsByGroup: {
      lua: [
        { id: 'lua_tuoi_kg', label: 'Lúa tươi (/kg)' },
        { id: 'thoc_kg', label: 'Thóc (/kg)' },
        { id: 'tam_thu_mua', label: 'Tấm / giá thu mua tại ruộng' },
        { id: 'khac', label: 'Loại giá khác (ghi rõ)' }
      ],
      rau_hoa: [
        { id: 'kg', label: 'Theo kg' },
        { id: 'bo_gio', label: 'Theo bó / giỏ' },
        { id: 'chau_cay', label: 'Theo chậu / cây' },
        { id: 'khac', label: 'Khác (ghi rõ)' }
      ],
      cay_an_trai: [
        { id: 'kg', label: 'Theo kg' },
        { id: 'qua', label: 'Theo trái / quả' },
        { id: 'chum_thung', label: 'Theo chum / thùng' },
        { id: 'khac', label: 'Khác (ghi rõ)' }
      ]
    }
  };

  /** Cấu hình form nhiều loại cây (lúa / rau / trái) */
  var CROP_GROUP_META = {
    lua: {
      entriesKey: 'lua_entries',
      bufferKey: 'lua_input_buffer',
      idPrefix: 'lua',
      chipList: function () {
        return DATA.riceVarieties;
      },
      stages: function () {
        return DATA.growthStages;
      },
      pests: function () {
        return DATA.ricePests;
      },
      defaultStage: 'gd_ma',
      defaultPest: 'dao_on',
      useTenGiong: true,
      priceStep: 500,
      dataPrefix: 'lua',
      chipKhacLabel: 'Giống khác',
      priceKinds: function () {
        return DATA.priceKindsByGroup.lua;
      }
    },
    rau_hoa: {
      entriesKey: 'rau_entries',
      bufferKey: 'rau_input_buffer',
      idPrefix: 'rau',
      chipList: function () {
        return DATA.vegVarieties;
      },
      stages: function () {
        return DATA.vegGrowthStages;
      },
      pests: function () {
        return DATA.vegPests;
      },
      defaultStage: 'veg_cay_con',
      defaultPest: 'tho',
      useTenGiong: false,
      priceStep: 500,
      dataPrefix: 'rau',
      chipKhacLabel: 'Loại khác',
      priceKinds: function () {
        return DATA.priceKindsByGroup.rau_hoa;
      }
    },
    cay_an_trai: {
      entriesKey: 'trai_entries',
      bufferKey: 'trai_input_buffer',
      idPrefix: 'trai',
      chipList: function () {
        return DATA.fruitVarieties;
      },
      stages: function () {
        return DATA.fruitGrowthStages;
      },
      pests: function () {
        return DATA.fruitPests;
      },
      defaultStage: 'fr_cay_con',
      defaultPest: 'bo_tri',
      useTenGiong: false,
      priceStep: 1000,
      dataPrefix: 'trai',
      chipKhacLabel: 'Loại khác',
      priceKinds: function () {
        return DATA.priceKindsByGroup.cay_an_trai;
      }
    }
  };

  function getFlowSteps() {
    var s = ['region', 'pick_groups', 'farmers'];
    var sg = state.selected_groups;
    if (sg.lua) s.push('lua');
    if (sg.rau_hoa) s.push('rau');
    if (sg.cay_an_trai) s.push('trai');
    s.push('extra_detail');
    s.push('confirm');
    return s;
  }

  function flowStepId() {
    var steps = getFlowSteps();
    var i = state.flowIndex;
    if (i < 0) i = 0;
    if (i >= steps.length) i = steps.length - 1;
    return steps[i];
  }

  function flowStepTitle(id) {
    var titles = {
      region: 'Khu vực',
      pick_groups: 'Chọn nhóm cây trồng',
      farmers: 'ND nòng cốt',
      lua: 'Nhóm lúa',
      rau: 'Rau & hoa kiểng',
      trai: 'Cây ăn trái',
      extra_detail: 'Chi tiết bổ sung',
      confirm: 'Xác nhận'
    };
    return titles[id] || '';
  }

  function emptyFarmersRow() {
    return { name: '', address: '', dien_tich: '', phone: '' };
  }

  var CROP_STEP_UI = {
    lua: {
      introTitle: 'Nhóm lúa',
      introBody:
        'Thêm từng giống/loại lúa: chọn nhanh hoặc gõ tên; ghi năng suất (có đơn vị), giai đoạn, sâu/bệnh; giá thị trường không bắt buộc — có thể thêm nhiều dòng loại giá (lúa tươi, thóc…).',
      introBox: 'border-emerald-200 bg-emerald-50/30',
      titleClass: 'text-emerald-900',
      addBtnClass: 'bg-emerald-600',
      pestLinkClass: 'text-emerald-700',
      tenLabel: 'Tên giống / loại lúa',
      chipSectionTitle: 'Giống / loại lúa — chọn nhanh',
      addNameBtn: 'Thêm giống',
      emptyMsg:
        'Chưa có giống nào. Chọn chip phía trên hoặc gõ tên và nhấn &quot;Thêm giống&quot;.',
      showTongDt: true,
      cardBorder: 'border-emerald-200'
    },
    rau_hoa: {
      introTitle: 'Rau màu & hoa kiểng',
      introBody:
        'Thêm từng loại rau hoặc hoa: ghi năng suất, giai đoạn, sâu/bệnh; giá không bắt buộc — thêm dòng khi có (kg, bó, chậu…).',
      introBox: 'border-violet-200 bg-violet-50/40',
      titleClass: 'text-violet-900',
      addBtnClass: 'bg-violet-600',
      pestLinkClass: 'text-violet-700',
      tenLabel: 'Tên loại rau / hoa',
      chipSectionTitle: 'Loại cây — chọn nhanh',
      addNameBtn: 'Thêm loại',
      emptyMsg:
        'Chưa có loại nào. Chọn chip hoặc gõ tên và nhấn &quot;Thêm loại&quot;.',
      showTongDt: false,
      cardBorder: 'border-violet-200'
    },
    cay_an_trai: {
      introTitle: 'Cây ăn trái',
      introBody:
        'Thêm từng loại cây ăn trái: ghi năng suất, giai đoạn, sâu/bệnh; giá không bắt buộc — thêm dòng khi có (kg, trái, chum…).',
      introBox: 'border-teal-200 bg-teal-50/40',
      titleClass: 'text-teal-900',
      addBtnClass: 'bg-teal-600',
      pestLinkClass: 'text-teal-700',
      tenLabel: 'Tên loại cây ăn trái',
      chipSectionTitle: 'Loại cây — chọn nhanh',
      addNameBtn: 'Thêm loại',
      emptyMsg:
        'Chưa có loại nào. Chọn chip hoặc gõ tên và nhấn &quot;Thêm loại&quot;.',
      showTongDt: false,
      cardBorder: 'border-teal-200'
    }
  };

  function newCropEntry(grp, label) {
    var m = CROP_GROUP_META[grp];
    var id = m.idPrefix + '_' + Date.now() + '_' + String(Math.random()).slice(2, 9);
    var t = String(label || '').trim();
    if (!t) t = m.useTenGiong ? 'Giống mới' : 'Loại mới';
    var e = { id: id, giai_doan: m.defaultStage, sau_benh: [], nang_suat: '' };
    if (m.useTenGiong) e.ten_giong = t;
    else e.ten_loai = t;
    e.gia_items = [];
    return e;
  }

  function getEntryTen(e, grp) {
    var m = CROP_GROUP_META[grp];
    return m.useTenGiong ? e.ten_giong : e.ten_loai;
  }

  function genGiaRowId() {
    return 'gp_' + Date.now() + '_' + String(Math.random()).slice(2, 9);
  }

  function defaultGiaItem(grp) {
    var kinds = CROP_GROUP_META[grp].priceKinds();
    var first =
      kinds.filter(function (k) {
        return k.id !== 'khac';
      })[0] || kinds[0];
    return {
      id: genGiaRowId(),
      loai_id: first ? first.id : 'khac',
      ten_loai_gia: '',
      gia: 0
    };
  }

  /** Chuẩn hoá entry cũ / thiếu field (giá có thể để trống) */
  function ensureEntryGiaItems(e) {
    if (e.nang_suat == null) e.nang_suat = '';
    if (!Array.isArray(e.gia_items)) e.gia_items = [];
  }

  function splitEntryGiaAttr(s) {
    var idx = s.indexOf(':');
    return { entryId: s.slice(0, idx), rowId: s.slice(idx + 1) };
  }

  function emptyPricesByGroup() {
    var o = { lua: {}, rau_hoa: {}, cay_an_trai: {} };
    Object.keys(DATA.priceItemsByGroup).forEach(function (gk) {
      DATA.priceItemsByGroup[gk].forEach(function (item) {
        o[gk][item.id] = 0;
      });
    });
    return o;
  }

  var STORAGE_KEY = 'pest_report_google_v1';
  var gisInited = false;

  var state = {
    view: 'login',
    reporter: null,
    flowIndex: 0,
    selected_groups: { lua: true, rau_hoa: true, cay_an_trai: true },
    region_id: '',
    tong_dt_ha: '',
    lua_entries: [],
    lua_input_buffer: '',
    rau_entries: [],
    rau_input_buffer: '',
    trai_entries: [],
    trai_input_buffer: '',
    farmers: [emptyFarmersRow()],
    prices_by_group: emptyPricesByGroup(),
    extra_crop_detail: '',
    media_links_text: '',
    media_uploading: false,
    media_upload_jobs: [],
    media_upload_error: '',
    media_upload_files: [],
    submitting: false,
    error: '',
    success: false
  };

  function cfg() {
    return window.PEST_REPORT_CONFIG || {};
  }

  function parseJwt(token) {
    var parts = String(token).split('.');
    if (parts.length !== 3) throw new Error('jwt');
    var json = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(
      decodeURIComponent(
        json
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      )
    );
  }

  function saveReporter(u) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    } catch (e) {}
  }

  function loadReporterFromStorage() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var u = JSON.parse(raw);
      if (u && u.email) {
        state.reporter = u;
        state.view = 'form';
      }
    } catch (e) {}
  }

  function handleCredentialResponse(response) {
    try {
      var p = parseJwt(response.credential);
      state.reporter = {
        email: p.email || '',
        name: p.name || '',
        picture: p.picture || '',
        sub: p.sub || ''
      };
      saveReporter(state.reporter);
      state.view = 'form';
      state.error = '';
      render();
    } catch (e) {
      state.error = 'Không đọc được thông tin đăng nhập.';
      render();
    }
  }

  function initGisOnce() {
    var cid = (cfg().GOOGLE_CLIENT_ID || '').trim();
    if (!cid || gisInited) return;
    if (!window.google || !google.accounts || !google.accounts.id) return;
    google.accounts.id.initialize({
      client_id: cid,
      callback: handleCredentialResponse,
      auto_select: false,
      ux_mode: 'popup',
      locale: 'vi'
    });
    gisInited = true;
  }

  function whenGisReady(fn) {
    if (window.google && google.accounts && google.accounts.id) {
      fn();
      return;
    }
    var n = 0;
    var id = setInterval(function () {
      n += 1;
      if (window.google && google.accounts && google.accounts.id) {
        clearInterval(id);
        fn();
      } else if (n > 200) {
        clearInterval(id);
        state.error = 'Không tải được Google Sign-In.';
        render();
      }
    }, 50);
  }

  function mountGoogleSignInButton() {
    var wrap = document.getElementById('gsi-btn-wrap');
    if (!wrap) return;
    wrap.innerHTML = '';
    var cid = (cfg().GOOGLE_CLIENT_ID || '').trim();
    if (!cid) {
      wrap.innerHTML =
        '<p class="text-red-600 text-sm text-center px-2">Thiếu <code class="bg-red-50 px-1">GOOGLE_CLIENT_ID</code> trong assets/config.js</p>';
      return;
    }
    whenGisReady(function () {
      initGisOnce();
      google.accounts.id.renderButton(wrap, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'signin_with',
        shape: 'rectangular',
        width: 320,
        locale: 'vi'
      });
    });
  }

  function resetFormFields() {
    state.region_id = '';
    state.tong_dt_ha = '';
    state.lua_entries = [];
    state.lua_input_buffer = '';
    state.rau_entries = [];
    state.rau_input_buffer = '';
    state.trai_entries = [];
    state.trai_input_buffer = '';
    state.farmers = [emptyFarmersRow()];
    state.prices_by_group = emptyPricesByGroup();
    state.selected_groups = { lua: true, rau_hoa: true, cay_an_trai: true };
    state.extra_crop_detail = '';
    state.media_links_text = '';
    state.submitting = false;
    state.error = '';
  }

  function resetFormKeepReporter() {
    resetFormFields();
    state.flowIndex = 0;
    state.success = false;
    render();
  }

  function logout() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    if (window.google && google.accounts && google.accounts.id) {
      google.accounts.id.disableAutoSelect();
    }
    state.reporter = null;
    state.view = 'login';
    resetFormFields();
    state.flowIndex = 0;
    state.success = false;
    render();
  }

  function getRegion() {
    return DATA.regions.filter(function (r) {
      return r.id === state.region_id;
    })[0];
  }

  function num(v) {
    var n = parseFloat(String(v).replace(',', '.'));
    return isNaN(n) ? 0 : n;
  }

  var MAX_MEDIA_LINKS = 10;

  function parseMediaLinkLines(text) {
    return String(text || '')
      .split(/\r?\n/)
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
  }

  function isValidHttpUrl(s) {
    try {
      var u = new URL(s);
      return u.protocol === 'http:' || u.protocol === 'https:';
    } catch (e) {
      return false;
    }
  }

  function validateMediaLinksText(text) {
    var lines = parseMediaLinkLines(text);
    if (lines.length > MAX_MEDIA_LINKS)
      return 'Link ảnh/video: tối đa ' + MAX_MEDIA_LINKS + ' dòng.';
    for (var i = 0; i < lines.length; i++) {
      if (!isValidHttpUrl(lines[i]))
        return 'Link ảnh/video — dòng ' + (i + 1) + ' không phải URL hợp lệ (chỉ http hoặc https).';
    }
    return '';
  }

  function wpBaseUrl() {
    var b = (cfg().WP_BASE_URL || 'https://web.tinnongtntech.com').trim();
    return b.replace(/\/+$/, '');
  }

  function fetchWpNonce() {
    var url = wpBaseUrl() + '/wp-json/tntech/v1/nonce';
    return fetch(url, { method: 'GET' })
      .then(function (r) {
        return r
          .text()
          .then(function (t) {
            var j = {};
            try {
              j = JSON.parse(t);
            } catch (e) {
              throw new Error('Không đọc được nonce từ máy chủ.');
            }
            if (!j || !j.nonce) throw new Error('Thiếu nonce từ máy chủ.');
            return j.nonce;
          })
          .catch(function () {
            throw new Error('Không đọc được nonce từ máy chủ.');
          });
      })
      .catch(function (e) {
        if (e && (e.name === 'TypeError' || /Failed to fetch/i.test(e.message || ''))) {
          throw new Error(
            'Không kết nối được máy chủ upload (có thể do CORS hoặc mạng). Nếu dùng GitHub Pages, cần bật CORS ở WordPress cho domain của bạn.'
          );
        }
        throw e;
      });
  }

  function uploadSingleFileToWp(file, email, nonce) {
    var url = wpBaseUrl() + '/wp-json/tntech/v1/marketing/upload';
    var fd = new FormData();
    fd.append('email', email);
    fd.append('file', file, file && file.name ? file.name : 'upload.bin');
    return fetch(url, { method: 'POST', headers: { 'X-WP-Nonce': nonce }, body: fd })
      .then(function (r) {
        return r.text().then(function (t) {
          var j = {};
          try {
            j = JSON.parse(t);
          } catch (e) {
            throw new Error('Phản hồi upload không hợp lệ.');
          }
          if (!j.success) {
            var code = (j && j.code) || (j && j.data && j.data.code) || '';
            if (code === 'tntech_missing_nonce') throw new Error('Thiếu nonce upload.');
            if (code === 'tntech_invalid_nonce') throw new Error('Nonce upload không hợp lệ hoặc đã hết hạn.');
            if (code === 'tntech_invalid_email') throw new Error('Email không hợp lệ.');
            if (code === 'tntech_missing_file') throw new Error('Thiếu file upload.');
            if (code === 'tntech_invalid_mime') throw new Error('Định dạng file không hỗ trợ.');
            if (code === 'tntech_file_too_large') throw new Error('File quá dung lượng cho phép.');
            if (code === 'tntech_rate_limited') throw new Error('Upload quá nhiều lần — vui lòng thử lại sau.');
            throw new Error((j && (j.message || j.error)) || 'Upload thất bại.');
          }
          var files = Array.isArray(j.files) ? j.files : [];
          var f0 = files[0] || null;
          if (!f0 || !f0.url) throw new Error('Upload thành công nhưng thiếu URL file.');
          return f0.url;
        });
      })
      .catch(function (e) {
        if (e && (e.name === 'TypeError' || /Failed to fetch/i.test(e.message || ''))) {
          throw new Error(
            'Upload bị chặn (có thể do CORS hoặc mạng). Nếu dùng GitHub Pages, cần bật CORS ở WordPress cho domain của bạn.'
          );
        }
        throw e;
      });
  }

  function appendUploadedUrls(urls) {
    var cur = parseMediaLinkLines(state.media_links_text);
    var out = cur.slice(0);
    for (var i = 0; i < urls.length; i++) {
      if (out.length >= MAX_MEDIA_LINKS) break;
      if (isValidHttpUrl(urls[i])) out.push(urls[i]);
    }
    state.media_links_text = out.join('\n');
  }

  function startMediaUpload() {
    if (state.media_uploading) return;
    if (!state.reporter || !state.reporter.email) {
      state.media_upload_error = 'Cần đăng nhập để upload (thiếu email).';
      render();
      return;
    }
    var files = state.media_upload_files || [];
    if (!files.length) {
      state.media_upload_error = 'Chọn ít nhất một file để upload.';
      render();
      return;
    }
    if (parseMediaLinkLines(state.media_links_text).length >= MAX_MEDIA_LINKS) {
      state.media_upload_error = 'Đã đủ ' + MAX_MEDIA_LINKS + ' link — không thể thêm.';
      render();
      return;
    }

    state.media_upload_error = '';
    state.media_uploading = true;
    state.media_upload_jobs = (state.media_upload_jobs || []).map(function (j) {
      return j && j.status === 'done' ? j : Object.assign({}, j, { status: 'uploading', error: '' });
    });
    render();

    fetchWpNonce()
      .then(function (nonce) {
        var uploaded = [];
        var i = 0;
        function step() {
          if (i >= files.length) return Promise.resolve();
          var f = files[i];
          var jobIdx = i;
          state.media_upload_jobs[jobIdx] = state.media_upload_jobs[jobIdx] || {
            name: f && f.name ? f.name : 'file_' + (i + 1),
            size: f && typeof f.size === 'number' ? f.size : 0,
            status: 'uploading',
            url: '',
            error: ''
          };
          state.media_upload_jobs[jobIdx].status = 'uploading';
          state.media_upload_jobs[jobIdx].error = '';
          render();
          return uploadSingleFileToWp(f, state.reporter.email, nonce)
            .then(function (url) {
              state.media_upload_jobs[jobIdx].status = 'done';
              state.media_upload_jobs[jobIdx].url = url;
              uploaded.push(url);
              appendUploadedUrls([url]);
              render();
            })
            .catch(function (e) {
              state.media_upload_jobs[jobIdx].status = 'error';
              state.media_upload_jobs[jobIdx].error = (e && e.message) || 'Upload thất bại.';
              render();
            })
            .then(function () {
              i += 1;
              if (parseMediaLinkLines(state.media_links_text).length >= MAX_MEDIA_LINKS) return;
              return step();
            });
        }
        return step();
      })
      .then(function () {
        state.media_uploading = false;
        render();
      })
      .catch(function (e) {
        state.media_uploading = false;
        state.media_upload_error = (e && e.message) || 'Lỗi upload.';
        render();
      });
  }

  function ensurePriceGroup(grp) {
    if (!state.prices_by_group[grp]) state.prices_by_group[grp] = {};
    return state.prices_by_group[grp];
  }

  function priceGet(grp, id) {
    var g = ensurePriceGroup(grp);
    var v = g[id];
    return typeof v === 'number' && !isNaN(v) ? v : 0;
  }

  function priceDelta(grp, id, delta) {
    var g = ensurePriceGroup(grp);
    var cur = priceGet(grp, id);
    g[id] = Math.max(0, cur + delta);
    render();
  }

  function priceInput(grp, id, raw) {
    var g = ensurePriceGroup(grp);
    g[id] = Math.max(0, num(raw));
    render();
  }

  function addFarmer() {
    if (state.farmers.length >= 10) return;
    state.farmers.push(emptyFarmersRow());
    render();
  }

  function removeFarmer(idx) {
    if (state.farmers.length <= 1) return;
    state.farmers.splice(idx, 1);
    render();
  }

  function setFarmerField(idx, key, value) {
    if (!state.farmers[idx]) return;
    state.farmers[idx][key] = value;
  }

  function cropAddEntry(grp, label) {
    var m = CROP_GROUP_META[grp];
    var e = newCropEntry(grp, label);
    state[m.entriesKey].push(e);
    render();
  }

  function cropRemoveEntry(grp, entryId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey] = state[m.entriesKey].filter(function (x) {
      return x.id !== entryId;
    });
    render();
  }

  function cropSetStage(grp, entryId, stageId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId) e.giai_doan = stageId;
    });
    render();
  }

  function cropAddPestRow(grp, entryId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId)
        e.sau_benh.push({ pest_id: m.defaultPest, mat_do: 'tb', ten_khac: '' });
    });
    render();
  }

  function cropRemovePestRow(grp, entryId, rowIdx) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId && e.sau_benh[rowIdx] != null) e.sau_benh.splice(rowIdx, 1);
    });
    render();
  }

  function cropSetPestPestId(grp, entryId, rowIdx, pestId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId && e.sau_benh[rowIdx]) {
        e.sau_benh[rowIdx].pest_id = pestId;
        if (pestId !== 'khac') e.sau_benh[rowIdx].ten_khac = '';
      }
    });
    render();
  }

  function cropSetPestMatDo(grp, entryId, rowIdx, matDo) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId && e.sau_benh[rowIdx]) e.sau_benh[rowIdx].mat_do = matDo;
    });
    render();
  }

  function cropSetPestTenKhac(grp, entryId, rowIdx, text) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId && e.sau_benh[rowIdx]) e.sau_benh[rowIdx].ten_khac = text;
    });
  }

  function cropSetTen(grp, entryId, text) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId) {
        if (m.useTenGiong) e.ten_giong = text;
        else e.ten_loai = text;
      }
    });
  }

  function cropSetNangSuat(grp, entryId, text) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id === entryId) e.nang_suat = text;
    });
  }

  function cropGiaDelta(grp, entryId, rowId, delta) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id !== entryId) return;
      ensureEntryGiaItems(e);
      e.gia_items.forEach(function (row) {
        if (row.id === rowId) row.gia = Math.max(0, num(row.gia) + delta);
      });
    });
    render();
  }

  function cropGiaInput(grp, entryId, rowId, raw) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id !== entryId) return;
      ensureEntryGiaItems(e);
      e.gia_items.forEach(function (row) {
        if (row.id === rowId) row.gia = Math.max(0, num(raw));
      });
    });
    render();
  }

  function cropSetGiaLoai(grp, entryId, rowId, loaiId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id !== entryId) return;
      ensureEntryGiaItems(e);
      e.gia_items.forEach(function (row) {
        if (row.id === rowId) {
          row.loai_id = loaiId;
          if (loaiId !== 'khac') row.ten_loai_gia = '';
        }
      });
    });
    render();
  }

  function cropSetGiaTenKhac(grp, entryId, rowId, text) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id !== entryId) return;
      ensureEntryGiaItems(e);
      e.gia_items.forEach(function (row) {
        if (row.id === rowId) row.ten_loai_gia = text;
      });
    });
  }

  function cropAddGiaRow(grp, entryId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id !== entryId) return;
      ensureEntryGiaItems(e);
      e.gia_items.push(defaultGiaItem(grp));
    });
    render();
  }

  function cropRemoveGiaRow(grp, entryId, rowId) {
    var m = CROP_GROUP_META[grp];
    state[m.entriesKey].forEach(function (e) {
      if (e.id !== entryId) return;
      ensureEntryGiaItems(e);
      e.gia_items = e.gia_items.filter(function (row) {
        return row.id !== rowId;
      });
    });
    render();
  }

  function validateStep() {
    if (!state.reporter) return 'Cần đăng nhập Google.';
    var fid = flowStepId();
    if (fid === 'region' && !state.region_id) return 'Chọn khu vực báo cáo.';
    if (fid === 'pick_groups') {
      var sg = state.selected_groups;
      if (!sg.lua && !sg.rau_hoa && !sg.cay_an_trai)
        return 'Chọn ít nhất một nhóm cây trồng (lúa, rau & hoa, hoặc cây ăn trái).';
    }
    if (fid === 'lua' && state.selected_groups.lua && state.lua_entries.length === 0)
      return 'Thêm ít nhất một giống hoặc loại lúa.';
    if (fid === 'rau' && state.selected_groups.rau_hoa && state.rau_entries.length === 0)
      return 'Thêm ít nhất một loại rau hoặc hoa.';
    if (fid === 'trai' && state.selected_groups.cay_an_trai && state.trai_entries.length === 0)
      return 'Thêm ít nhất một loại cây ăn trái.';
    if (fid === 'extra_detail') {
      var mErr = validateMediaLinksText(state.media_links_text);
      if (mErr) return mErr;
    }
    return '';
  }

  function validateAll() {
    if (!state.reporter) return 'Cần đăng nhập Google.';
    if (!state.region_id) return 'Chọn khu vực báo cáo.';
    var sg = state.selected_groups;
    if (!sg.lua && !sg.rau_hoa && !sg.cay_an_trai) return 'Chọn ít nhất một nhóm cây trồng.';
    if (sg.lua && state.lua_entries.length === 0) return 'Nhóm lúa: thêm ít nhất một giống/loại lúa.';
    if (sg.rau_hoa && state.rau_entries.length === 0) return 'Rau & hoa: thêm ít nhất một loại cây.';
    if (sg.cay_an_trai && state.trai_entries.length === 0) return 'Cây ăn trái: thêm ít nhất một loại cây.';
    var mediaErr = validateMediaLinksText(state.media_links_text);
    if (mediaErr) return mediaErr;
    return '';
  }

  function next() {
    var err = validateStep();
    if (err) {
      state.error = err;
      render();
      return;
    }
    state.error = '';
    var steps = getFlowSteps();
    if (state.flowIndex < steps.length - 1) setFlowIndex(state.flowIndex + 1);
  }

  function back() {
    if (state.flowIndex > 0) setFlowIndex(state.flowIndex - 1);
  }

  function setFlowIndex(n) {
    state.flowIndex = n;
    state.error = '';
    render();
  }

  function toggleGroupCrop(key) {
    state.selected_groups[key] = !state.selected_groups[key];
    render();
  }

  function resetAll() {
    resetFormKeepReporter();
  }

  function mapSauBenhForReport(grp, sauBenh) {
    var m = CROP_GROUP_META[grp];
    var pests = m.pests();
    return sauBenh.map(function (r) {
      return {
        pest_id: r.pest_id,
        pest_label: labelById(pests, r.pest_id),
        mat_do: r.mat_do,
        mat_do_label: labelById(DATA.pestMatDo, r.mat_do),
        ten_khac: r.pest_id === 'khac' ? String(r.ten_khac || '').trim() : ''
      };
    });
  }

  function mapGiaItemsForReport(grp, items) {
    var kinds = CROP_GROUP_META[grp].priceKinds();
    return items.map(function (r) {
      var loaiLabel =
        r.loai_id === 'khac' && String(r.ten_loai_gia || '').trim()
          ? String(r.ten_loai_gia || '').trim()
          : labelById(kinds, r.loai_id);
      return {
        id: r.id,
        loai_id: r.loai_id,
        loai_label: loaiLabel,
        ten_loai_gia: r.loai_id === 'khac' ? String(r.ten_loai_gia || '').trim() : '',
        gia_vnd: num(r.gia)
      };
    });
  }

  function giaRowDisplayLabel(grp, row) {
    var kinds = CROP_GROUP_META[grp].priceKinds();
    if (row.loai_id === 'khac' && String(row.ten_loai_gia || '').trim())
      return String(row.ten_loai_gia || '').trim();
    return labelById(kinds, row.loai_id) || row.loai_id;
  }

  function buildReportObject() {
    var reg = getRegion();
    var rep = state.reporter;
    return {
      version: 9,
      region_id: state.region_id,
      khu_vuc_label: reg ? reg.label : '',
      selected_groups: {
        lua: !!state.selected_groups.lua,
        rau_hoa: !!state.selected_groups.rau_hoa,
        cay_an_trai: !!state.selected_groups.cay_an_trai
      },
      reporter: rep
        ? {
            email: rep.email,
            name: rep.name,
            picture: rep.picture,
            sub: rep.sub
          }
        : null,
      farmers: state.farmers.filter(function (f) {
        return (f.name + f.address + f.dien_tich + f.phone).trim().length > 0;
      }),
      crop_groups: {
        lua: {
          tong_dt_ha: state.tong_dt_ha.trim(),
          lua_entries: state.lua_entries.map(function (e) {
            ensureEntryGiaItems(e);
            return {
              id: e.id,
              ten_giong: String(e.ten_giong || '').trim(),
              nang_suat: String(e.nang_suat || '').trim(),
              giai_doan: e.giai_doan,
              giai_doan_label: labelById(DATA.growthStages, e.giai_doan),
              sau_benh: mapSauBenhForReport('lua', e.sau_benh),
              gia_items: mapGiaItemsForReport('lua', e.gia_items)
            };
          })
        },
        rau_hoa: {
          rau_entries: state.rau_entries.map(function (e) {
            ensureEntryGiaItems(e);
            return {
              id: e.id,
              ten_loai: String(e.ten_loai || '').trim(),
              nang_suat: String(e.nang_suat || '').trim(),
              giai_doan: e.giai_doan,
              giai_doan_label: labelById(DATA.vegGrowthStages, e.giai_doan),
              sau_benh: mapSauBenhForReport('rau_hoa', e.sau_benh),
              gia_items: mapGiaItemsForReport('rau_hoa', e.gia_items)
            };
          })
        },
        cay_an_trai: {
          trai_entries: state.trai_entries.map(function (e) {
            ensureEntryGiaItems(e);
            return {
              id: e.id,
              ten_loai: String(e.ten_loai || '').trim(),
              nang_suat: String(e.nang_suat || '').trim(),
              giai_doan: e.giai_doan,
              giai_doan_label: labelById(DATA.fruitGrowthStages, e.giai_doan),
              sau_benh: mapSauBenhForReport('cay_an_trai', e.sau_benh),
              gia_items: mapGiaItemsForReport('cay_an_trai', e.gia_items)
            };
          })
        }
      },
      chi_tiet_bo_sung: state.extra_crop_detail.trim(),
      media_links: parseMediaLinkLines(state.media_links_text)
    };
  }

  function buildPayload() {
    var reg = getRegion();
    var rep = state.reporter || {};
    return {
      token: cfg().SUBMIT_TOKEN || '',
      khu_vuc: reg ? reg.label : '',
      reporter_email: rep.email || '',
      reporter_name: rep.name || '',
      report: buildReportObject()
    };
  }

  function submit() {
    var err = validateAll();
    if (err) {
      state.error = err;
      render();
      return;
    }
    var url = (cfg().WEB_APP_URL || '').trim();
    var token = (cfg().SUBMIT_TOKEN || '').trim();
    if (!url || !token) {
      state.error = 'Thiếu cấu hình: tạo assets/config.js từ config.example.js.';
      render();
      return;
    }

    state.submitting = true;
    state.error = '';
    render();

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(buildPayload()),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    })
      .then(function (r) {
        return r.text().then(function (t) {
          var j = {};
          try {
            j = JSON.parse(t);
          } catch (e) {
            throw new Error('Phản hồi không hợp lệ từ máy chủ.');
          }
          if (!j.ok) {
            var msg =
              j.error === 'unauthorized'
                ? 'Từ chối: kiểm tra token.'
                : j.error === 'server_config'
                  ? 'Lỗi cấu hình máy chủ (Sheet ID).'
                  : j.message || j.error || 'Gửi thất bại.';
            throw new Error(msg);
          }
          return j;
        });
      })
      .then(function () {
        state.submitting = false;
        state.success = true;
        render();
      })
      .catch(function (e) {
        state.submitting = false;
        state.error = e.message || 'Lỗi mạng hoặc máy chủ.';
        render();
      });
  }

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function labelById(arr, id) {
    var f = arr.filter(function (x) {
      return x.id === id;
    })[0];
    return f ? f.label : '';
  }

  function formatMoney(n) {
    try {
      return new Intl.NumberFormat('vi-VN').format(n) + ' ₫';
    } catch (e) {
      return String(n) + ' ₫';
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function render() {
    var root = document.getElementById('app-root');
    if (!root) return;

    if (state.view === 'form' && !state.reporter && !state.success) {
      state.view = 'login';
    }

    if (state.view === 'login') {
      var errLogin = state.error
        ? '<div class="mb-4 rounded-xl bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">' +
          escapeHtml(state.error) +
          '</div>'
        : '';
      root.innerHTML =
        '<div class="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-10">' +
        '<div class="max-w-md w-full rounded-2xl bg-white border border-slate-200 shadow-sm p-6">' +
        '<h1 class="text-xl font-semibold text-slate-900 text-center">Báo cáo dịch hại &amp; giá cả</h1>' +
        '<p class="text-slate-600 text-sm text-center mt-2">Đăng nhập bằng Google để ghi nhận người báo cáo.</p>' +
        errLogin +
        '<div id="gsi-btn-wrap" class="flex justify-center mt-6 min-h-[48px]"></div>' +
        '<p class="text-xs text-slate-500 text-center mt-6">Dùng tài khoản Google được phân quyền trong tổ chức.</p>' +
        '</div></div>';
      setTimeout(mountGoogleSignInButton, 0);
      return;
    }

    if (state.success) {
      root.innerHTML = '';
      root.appendChild(
        el(
          '<div class="max-w-lg mx-auto px-4 py-8 pb-28">' +
            '<div class="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">' +
            '<p class="text-lg font-semibold text-emerald-900">Đã gửi báo cáo</p>' +
            '<p class="mt-2 text-emerald-800 text-sm">Cảm ơn bạn. Dữ liệu đã được lưu.</p>' +
            '<button type="button" id="btn-again" class="mt-6 w-full min-h-[52px] rounded-xl bg-emerald-600 text-white font-medium text-lg active:scale-[0.98] shadow">' +
            'Báo cáo tiếp' +
            '</button></div></div>'
        )
      );
      document.getElementById('btn-again').addEventListener('click', resetFormKeepReporter);
      return;
    }

    var flowSteps = getFlowSteps();
    if (state.flowIndex >= flowSteps.length) state.flowIndex = Math.max(0, flowSteps.length - 1);
    var curFlowId = flowStepId();
    var rep = state.reporter;
    var userBar =
      rep && rep.email
        ? '<div class="flex items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-100">' +
          '<div class="flex items-center gap-2 min-w-0 flex-1">' +
          (rep.picture
            ? '<img src="' +
              escapeHtml(rep.picture) +
              '" alt="" class="w-10 h-10 rounded-full shrink-0 bg-slate-200" width="40" height="40" />'
            : '<div class="w-10 h-10 rounded-full bg-emerald-100 shrink-0 flex items-center justify-center text-emerald-700 font-semibold">' +
              escapeHtml((rep.name || rep.email || '?').charAt(0).toUpperCase()) +
              '</div>') +
          '<div class="min-w-0">' +
          '<p class="text-sm font-medium text-slate-900 truncate">' +
          escapeHtml(rep.name || 'Người dùng') +
          '</p>' +
          '<p class="text-xs text-slate-500 truncate">' +
          escapeHtml(rep.email) +
          '</p></div></div>' +
          '<button type="button" id="btn-logout" class="shrink-0 text-sm font-medium text-slate-600 min-h-[44px] px-2 rounded-lg active:bg-slate-100">Đăng xuất</button>' +
          '</div>'
        : '';

    var header =
      '<header class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-slate-200">' +
      '<div class="max-w-lg mx-auto px-4 py-3">' +
      '<p class="text-xs font-medium text-slate-500 uppercase tracking-wide">Form báo cáo dịch hại & giá cả</p>' +
      userBar +
      '<div class="flex gap-1 mt-2 overflow-x-auto pb-1">' +
      flowSteps
        .map(function (_, i) {
          var on = i === state.flowIndex;
          return (
            '<span class="h-1.5 shrink-0 rounded-full ' +
            (on ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-200') +
            '" aria-hidden="true"></span>'
          );
        })
        .join('') +
      '</div>' +
      '<p class="text-sm text-slate-600 mt-1">Bước ' +
      (state.flowIndex + 1) +
      '/' +
      flowSteps.length +
      ' — ' +
      escapeHtml(flowStepTitle(curFlowId)) +
      '</p>' +
      '</div></header>';

    var bodyHtml = renderBody();
    var errBox = state.error
      ? '<div class="mb-4 rounded-xl bg-red-50 border border-red-200 text-red-800 px-4 py-3 text-sm">' +
        escapeHtml(state.error) +
        '</div>'
      : '';

    var cfgWarn =
      !cfg().WEB_APP_URL || !cfg().SUBMIT_TOKEN
        ? '<div class="mb-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 px-4 py-3 text-sm">Chưa cấu hình <code class="bg-amber-100 px-1 rounded">assets/config.js</code> — xem README.</div>'
        : '';

    root.innerHTML =
      '<div class="min-h-screen bg-slate-100 pb-36">' +
      header +
      '<main class="max-w-lg mx-auto px-4 py-6">' +
      cfgWarn +
      errBox +
      bodyHtml +
      '</main>' +
      '<footer class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 pb-[max(0.75rem,env(safe-area-inset-bottom))]">' +
      '<div class="max-w-lg mx-auto px-4 py-3 flex gap-3">' +
      (state.flowIndex > 0
        ? '<button type="button" id="btn-back" class="min-h-[52px] px-5 rounded-xl border-2 border-slate-300 text-slate-800 font-medium">Quay lại</button>'
        : '') +
      (state.flowIndex < flowSteps.length - 1
        ? '<button type="button" id="btn-next" class="flex-1 min-h-[52px] rounded-xl bg-emerald-600 text-white font-semibold text-lg active:scale-[0.98] shadow disabled:opacity-50" ' +
          (state.submitting ? 'disabled' : '') +
          '>Tiếp</button>'
        : '<button type="button" id="btn-submit" class="flex-1 min-h-[52px] rounded-xl bg-emerald-600 text-white font-semibold text-lg active:scale-[0.98] shadow disabled:opacity-50" ' +
          (state.submitting ? 'disabled' : '') +
          '>' +
          (state.submitting ? 'Đang gửi…' : 'Gửi báo cáo') +
          '</button>') +
      '</div></footer></div>';

    wire();
  }

  function renderBody() {
    var id = flowStepId();
    if (id === 'region') return renderStepRegion();
    if (id === 'pick_groups') return renderStepPickGroups();
    if (id === 'farmers') return renderStepFarmers();
    if (id === 'lua') return renderStepGroupLua();
    if (id === 'rau') return renderStepGroupRau();
    if (id === 'trai') return renderStepGroupTrai();
    if (id === 'extra_detail') return renderStepExtraDetail();
    return renderStepConfirm();
  }

  function renderStepPickGroups() {
    var sg = state.selected_groups;
    return (
      '<div class="space-y-4">' +
      '<p class="text-slate-700 text-sm leading-relaxed">Chọn <strong>một hoặc nhiều nhóm</strong> cần báo cáo chi tiết. Các bước sau chỉ hiển thị form cho nhóm đã chọn.</p>' +
      '<div class="grid grid-cols-1 gap-3">' +
      [
        { key: 'lua', label: 'Lúa', sub: 'Giống/loại lúa, giai đoạn, sâu bệnh theo giống, giá theo từng giống' },
        { key: 'rau_hoa', label: 'Rau màu & hoa kiểng', sub: 'Loại cây, giai đoạn, sâu bệnh theo loại, giá từng loại' },
        { key: 'cay_an_trai', label: 'Cây ăn trái', sub: 'Loại cây, giai đoạn, sâu bệnh theo loại, giá từng loại' }
      ]
        .map(function (row) {
          var on = sg[row.key];
          return (
            '<button type="button" data-crop-grp="' +
            row.key +
            '" class="min-h-[56px] w-full rounded-xl border-2 text-left px-4 py-3 transition ' +
            (on
              ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-200'
              : 'border-slate-200 bg-white text-slate-700') +
            '"><span class="block font-semibold">' +
            escapeHtml(row.label) +
            '</span><span class="block text-xs mt-1 text-slate-600">' +
            escapeHtml(row.sub) +
            '</span></button>'
          );
        })
        .join('') +
      '</div>' +
      '<p class="text-xs text-slate-500">Nếu sau đó cần thêm thông tin nhóm khác, dùng bước <strong>Chi tiết bổ sung</strong> (trước khi gửi).</p>' +
      '</div>'
    );
  }

  function renderStepExtraDetail() {
    var jobs = state.media_upload_jobs || [];
    var jobsHtml =
      jobs.length === 0
        ? '<p class="text-xs text-slate-500">Chưa chọn file.</p>'
        : '<ul class="mt-2 space-y-2">' +
          jobs
            .map(function (j) {
              var st =
                j.status === 'done'
                  ? '<span class="text-emerald-700 font-medium">Đã upload</span>'
                  : j.status === 'error'
                    ? '<span class="text-red-600 font-medium">Lỗi</span>'
                    : '<span class="text-slate-600 font-medium">Đang upload…</span>';
              var sub = j.url
                ? '<div class="text-xs text-slate-600 break-all mt-1">' + escapeHtml(j.url) + '</div>'
                : j.error
                  ? '<div class="text-xs text-red-700 mt-1">' + escapeHtml(j.error) + '</div>'
                  : '';
              return (
                '<li class="rounded-xl border border-slate-200 bg-white px-3 py-2">' +
                '<div class="flex items-start justify-between gap-2">' +
                '<div class="min-w-0 flex-1">' +
                '<div class="text-sm font-medium text-slate-900 truncate">' +
                escapeHtml(j.name || 'File') +
                '</div>' +
                sub +
                '</div>' +
                '<div class="shrink-0 text-xs">' +
                st +
                '</div>' +
                '</div>' +
                '</li>'
              );
            })
            .join('') +
          '</ul>';
    var upErr = state.media_upload_error
      ? '<div class="mt-2 rounded-xl bg-red-50 border border-red-200 text-red-800 px-3 py-2 text-xs">' +
        escapeHtml(state.media_upload_error) +
        '</div>'
      : '';
    var upDisabled = state.submitting || state.media_uploading ? 'disabled' : '';
    return (
      '<div class="space-y-3">' +
      '<div class="rounded-2xl border border-indigo-200 bg-indigo-50/50 p-4">' +
      '<p class="font-semibold text-indigo-900">Chi tiết bổ sung</p>' +
      '<p class="text-sm text-slate-600 mt-1">Ghi thêm dịch hại, giá hoặc nhận xét cho <strong>các nhóm chưa nhập đủ</strong> ở trên, hoặc bất kỳ nhóm cây trồng khác.</p>' +
      '</div>' +
      '<div class="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">' +
      '<p class="text-sm font-medium text-slate-800">Upload ảnh / video (không bắt buộc)</p>' +
      '<p class="text-xs text-slate-600 leading-relaxed">Chọn file từ điện thoại/máy tính để upload lên máy chủ. Sau khi upload xong, link sẽ tự điền vào ô &quot;Link ảnh / video&quot; bên dưới.</p>' +
      '<input type="file" id="media_upload" class="w-full text-sm" accept="image/*,video/*" multiple ' +
      upDisabled +
      ' />' +
      '<button type="button" id="btn-media-upload" class="mt-2 w-full min-h-[48px] rounded-xl bg-indigo-600 text-white font-medium disabled:opacity-50" ' +
      upDisabled +
      '>' +
      (state.media_uploading ? 'Đang upload…' : 'Upload') +
      '</button>' +
      upErr +
      jobsHtml +
      '</div>' +
      '<label class="text-sm font-medium text-slate-800">Nội dung (không bắt buộc)</label>' +
      '<textarea id="extra_crop_detail" rows="6" class="w-full rounded-xl border border-slate-300 px-3 py-3 text-base" placeholder="Ví dụ: thêm tình hình nhóm rau nếu trước đó chỉ chọn lúa; hoặc ghi giá/mức dịch theo tỉnh láng giềng…">' +
      escapeHtml(state.extra_crop_detail) +
      '</textarea>' +
      '<div class="rounded-2xl border border-slate-200 bg-white p-4 mt-4 space-y-2">' +
      '<p class="text-sm font-medium text-slate-800">Link ảnh / video (không bắt buộc)</p>' +
      '<p class="text-xs text-slate-600 leading-relaxed">Dán link thủ công hoặc dùng nút upload ở trên. <strong>Mỗi dòng một URL</strong> (tối đa ' +
      MAX_MEDIA_LINKS +
      '); khi gửi báo cáo, các link này sẽ được ghi vào Google Sheet.</p>' +
      '<textarea id="media_links_text" rows="4" class="w-full rounded-xl border border-slate-300 px-3 py-3 text-base font-mono text-sm" placeholder="https://…">' +
      escapeHtml(state.media_links_text) +
      '</textarea></div></div>'
    );
  }

  function renderCropGroupStepHtml(grp) {
    var m = CROP_GROUP_META[grp];
    var ui = CROP_STEP_UI[grp];
    var p = m.dataPrefix;
    var stages = m.stages();
    var pests = m.pests();
    var entries = state[m.entriesKey];
    var buf = state[m.bufferKey];
    var rmEntryLabel = grp === 'lua' ? 'Xóa giống' : 'Xóa loại';
    var pestBlockTitle = grp === 'lua' ? 'Sâu / bệnh (theo giống)' : 'Sâu / bệnh (theo loại)';

    var chips = m
      .chipList()
      .filter(function (v) {
        return v.id !== 'khac';
      })
      .map(function (v) {
        return (
          '<button type="button" data-' +
          p +
          '-chip="' +
          escapeHtml(v.label) +
          '" class="min-h-[44px] px-3 rounded-xl border-2 border-slate-200 bg-white text-sm font-medium active:scale-[0.98]">' +
          escapeHtml(v.label) +
          '</button>'
        );
      })
      .join('');
    var khacV = m
      .chipList()
      .filter(function (v) {
        return v.id === 'khac';
      })[0];
    if (khacV)
      chips +=
        '<button type="button" data-' +
        p +
        '-chip="' +
        escapeHtml(m.chipKhacLabel) +
        '" class="min-h-[44px] px-3 rounded-xl border-2 border-dashed border-slate-300 bg-white text-sm font-medium active:scale-[0.98]">' +
        escapeHtml(khacV.label) +
        '</button>';

    var entriesHtml = entries
      .map(function (e) {
        var stageOpts = stages
          .map(function (g) {
            return (
              '<option value="' +
              g.id +
              '"' +
              (e.giai_doan === g.id ? ' selected' : '') +
              '>' +
              escapeHtml(g.label) +
              '</option>'
            );
          })
          .join('');
        var pestRows =
          e.sau_benh.length === 0
            ? '<p class="text-xs text-slate-500 mb-2">Chưa ghi nhận — nhấn &quot;Thêm dòng&quot; bên dưới.</p>'
            : e.sau_benh
                .map(function (row, ri) {
                  var pestOpts = pests
                    .map(function (pv) {
                      return (
                        '<option value="' +
                        pv.id +
                        '"' +
                        (row.pest_id === pv.id ? ' selected' : '') +
                        '>' +
                        escapeHtml(pv.label) +
                        '</option>'
                      );
                    })
                    .join('');
                  var mdOpts = DATA.pestMatDo
                    .map(function (md) {
                      return (
                        '<option value="' +
                        md.id +
                        '"' +
                        (row.mat_do === md.id ? ' selected' : '') +
                        '>' +
                        escapeHtml(md.label) +
                        '</option>'
                      );
                    })
                    .join('');
                  var khacField =
                    row.pest_id === 'khac'
                      ? '<input type="text" data-' +
                        p +
                        '-khac="' +
                        e.id +
                        ':' +
                        ri +
                        '" class="mt-2 w-full min-h-[40px] rounded-lg border border-slate-300 px-2 text-sm" placeholder="Tên sâu/bệnh" value="' +
                        escapeHtml(row.ten_khac || '') +
                        '" />'
                      : '';
                  return (
                    '<div class="rounded-lg border border-slate-100 bg-slate-50/80 p-2 mb-2 last:mb-0">' +
                    '<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">' +
                    '<div><label class="text-xs text-slate-500">Loại sâu/bệnh</label>' +
                    '<select data-' +
                    p +
                    '-pest="' +
                    e.id +
                    ':' +
                    ri +
                    '" class="mt-1 w-full min-h-[40px] rounded-lg border border-slate-300 text-sm">' +
                    pestOpts +
                    '</select></div>' +
                    '<div><label class="text-xs text-slate-500">Mật độ</label>' +
                    '<select data-' +
                    p +
                    '-md="' +
                    e.id +
                    ':' +
                    ri +
                    '" class="mt-1 w-full min-h-[40px] rounded-lg border border-slate-300 text-sm">' +
                    mdOpts +
                    '</select></div></div>' +
                    khacField +
                    '<button type="button" data-' +
                    p +
                    '-rm-pest="' +
                    e.id +
                    ':' +
                    ri +
                    '" class="mt-2 text-xs text-red-600 font-medium">Xóa dòng</button></div>'
                  );
                })
                .join('');
        ensureEntryGiaItems(e);
        var kinds = m.priceKinds();
        var giaRowsHtml =
          e.gia_items.length === 0
            ? '<p class="text-xs text-slate-500 mb-1">Giá không bắt buộc — nhấn &quot;Thêm loại giá&quot; khi có thông tin.</p>'
            : e.gia_items
                .map(function (pr) {
                  var loaiOpts = kinds
                    .map(function (k) {
                      return (
                        '<option value="' +
                        k.id +
                        '"' +
                        (pr.loai_id === k.id ? ' selected' : '') +
                        '>' +
                        escapeHtml(k.label) +
                        '</option>'
                      );
                    })
                    .join('');
                  var khacGia =
                    pr.loai_id === 'khac'
                      ? '<input type="text" data-' +
                        p +
                        '-gia-k="' +
                        e.id +
                        ':' +
                        pr.id +
                        '" class="mt-2 w-full min-h-[40px] rounded-lg border border-slate-300 px-2 text-sm" placeholder="Tên loại giá" value="' +
                        escapeHtml(pr.ten_loai_gia || '') +
                        '" />'
                      : '';
                  return (
                    '<div class="rounded-lg border border-slate-200 bg-white p-3 mb-2 last:mb-0 space-y-3">' +
                    '<div class="block w-full">' +
                    '<label class="text-xs text-slate-500 block">Loại giá</label>' +
                    '<select data-' +
                    p +
                    '-gia-loai="' +
                    e.id +
                    ':' +
                    pr.id +
                    '" class="mt-1 w-full min-h-[44px] rounded-lg border border-slate-300 text-sm">' +
                    loaiOpts +
                    '</select>' +
                    khacGia +
                    '</div>' +
                    '<div class="block w-full">' +
                    '<label class="text-xs text-slate-500 block">Giá (VNĐ, bước ' +
                    m.priceStep +
                    ')</label>' +
                    '<div class="mt-1 flex items-center gap-2">' +
                    '<button type="button" data-' +
                    p +
                    '-gia-d="' +
                    e.id +
                    ':' +
                    pr.id +
                    '" data-' +
                    p +
                    '-gia-pstep="-' +
                    m.priceStep +
                    '" class="min-h-[44px] min-w-[44px] rounded-lg bg-slate-100 text-lg font-bold">−</button>' +
                    '<input type="text" inputmode="decimal" data-' +
                    p +
                    '-gia-val="' +
                    e.id +
                    ':' +
                    pr.id +
                    '" class="flex-1 min-h-[44px] rounded-lg border border-slate-300 text-center text-sm font-semibold" value="' +
                    num(pr.gia) +
                    '" />' +
                    '<button type="button" data-' +
                    p +
                    '-gia-d="' +
                    e.id +
                    ':' +
                    pr.id +
                    '" data-' +
                    p +
                    '-gia-pstep="' +
                    m.priceStep +
                    '" class="min-h-[44px] min-w-[44px] rounded-lg bg-slate-100 text-lg font-bold">+</button>' +
                    '</div></div>' +
                    '<button type="button" data-' +
                    p +
                    '-gia-rm="' +
                    e.id +
                    ':' +
                    pr.id +
                    '" class="text-xs text-red-600 font-medium">Xóa dòng giá</button>' +
                    '</div>'
                  );
                })
                .join('');
        var tenDisp = escapeHtml(getEntryTen(e, grp));
        return (
          '<div class="rounded-2xl border ' +
          ui.cardBorder +
          ' bg-white p-4 shadow-sm mb-4">' +
          '<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">' +
          '<div class="flex-1 min-w-0">' +
          '<label class="text-xs text-slate-500">' +
          escapeHtml(ui.tenLabel) +
          '</label>' +
          '<input type="text" data-' +
          p +
          '-ten="' +
          e.id +
          '" class="mt-1 w-full min-h-[48px] rounded-xl border border-slate-300 px-3 font-medium" value="' +
          tenDisp +
          '" /></div>' +
          '<button type="button" data-' +
          p +
          '-rm="' +
          e.id +
          '" class="text-sm text-red-600 font-medium shrink-0 min-h-[44px]">' +
          escapeHtml(rmEntryLabel) +
          '</button></div>' +
          '<div class="mt-3"><label class="text-xs font-medium text-slate-700">Giai đoạn hiện tại</label>' +
          '<select data-' +
          p +
          '-stage="' +
          e.id +
          '" class="mt-1 w-full min-h-[44px] rounded-xl border border-slate-300 px-2 text-base">' +
          stageOpts +
          '</select></div>' +
          '<div class="mt-3">' +
          '<label class="text-xs font-medium text-slate-700">Năng suất</label>' +
          '<input type="text" data-' +
          p +
          '-ns="' +
          e.id +
          '" class="mt-1 w-full min-h-[44px] rounded-xl border border-slate-300 px-3 text-sm" placeholder="Ghi rõ đơn vị (VD: 6,5 tấn/ha; 800 kg/sào)" value="' +
          escapeHtml(e.nang_suat || '') +
          '" /></div>' +
          '<div class="mt-4 border-t border-slate-100 pt-3">' +
          '<div class="flex flex-wrap items-center justify-between gap-2 mb-2">' +
          '<span class="text-sm font-medium text-slate-800">' +
          escapeHtml(pestBlockTitle) +
          '</span>' +
          '<button type="button" data-' +
          p +
          '-add-pest="' +
          e.id +
          '" class="text-sm ' +
          ui.pestLinkClass +
          ' font-medium min-h-[40px]">+ Thêm dòng</button></div>' +
          pestRows +
          '</div>' +
          '<div class="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">' +
          '<div class="flex flex-wrap items-center justify-between gap-2 mb-2">' +
          '<span class="text-xs font-medium text-slate-800">Giá thị trường (không bắt buộc)</span>' +
          '<button type="button" data-' +
          p +
          '-gia-add="' +
          e.id +
          '" class="text-sm ' +
          ui.pestLinkClass +
          ' font-medium min-h-[36px]">+ Thêm loại giá</button></div>' +
          giaRowsHtml +
          '</div></div>'
        );
      })
      .join('');

    var tongDtBlock = ui.showTongDt
      ? '<div><label class="text-slate-700 font-medium">Tổng diện tích (ha)</label>' +
        '<input type="text" inputmode="decimal" id="tong_dt_ha" class="mt-1 w-full min-h-[52px] rounded-xl border border-slate-300 px-4 text-lg" placeholder="Ví dụ: 500" value="' +
        escapeHtml(state.tong_dt_ha) +
        '" /></div>'
      : '';

    return (
      '<div class="space-y-6">' +
      '<div class="rounded-2xl border ' +
      ui.introBox +
      ' p-4">' +
      '<p class="text-lg font-semibold ' +
      ui.titleClass +
      '">' +
      escapeHtml(ui.introTitle) +
      '</p>' +
      '<p class="text-slate-600 text-sm mt-1">' +
      escapeHtml(ui.introBody) +
      '</p></div>' +
      tongDtBlock +
      '<div><p class="text-slate-700 font-medium mb-2">' +
      escapeHtml(ui.chipSectionTitle) +
      '</p>' +
      '<div class="flex flex-wrap gap-2">' +
      chips +
      '</div>' +
      '<div class="mt-3 flex flex-col gap-2 sm:flex-row sm:items-stretch">' +
      '<input type="text" id="' +
      p +
      '_custom_input" class="flex-1 min-h-[48px] rounded-xl border border-slate-300 px-3" placeholder="Hoặc nhập tên rồi Thêm" value="' +
      escapeHtml(buf) +
      '" />' +
      '<button type="button" id="' +
      p +
      '_custom_add" class="min-h-[48px] rounded-xl ' +
      ui.addBtnClass +
      ' text-white font-medium px-4 shrink-0">' +
      escapeHtml(ui.addNameBtn) +
      '</button></div></div>' +
      (entries.length === 0
        ? '<p class="text-sm text-slate-500 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center">' +
          ui.emptyMsg +
          '</p>'
        : '<div class="space-y-2">' + entriesHtml + '</div>') +
      '</div>'
    );
  }

  function renderStepGroupLua() {
    return renderCropGroupStepHtml('lua');
  }

  function renderStepGroupRau() {
    return renderCropGroupStepHtml('rau_hoa');
  }

  function renderStepGroupTrai() {
    return renderCropGroupStepHtml('cay_an_trai');
  }

  function renderStepRegion() {
    return (
      '<div class="space-y-3">' +
      '<p class="text-slate-600 text-sm leading-relaxed">Chọn <strong>khu vực</strong> báo cáo (chỉ tên vùng).</p>' +
      '<div class="grid grid-cols-1 gap-2">' +
      DATA.regions
        .map(function (r) {
          var sel = state.region_id === r.id;
          return (
            '<button type="button" data-region="' +
            r.id +
            '" class="min-h-[52px] w-full rounded-xl border-2 text-left px-4 py-3 text-lg font-medium transition ' +
            (sel
              ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-200'
              : 'border-slate-200 bg-white text-slate-800') +
            '">' +
            escapeHtml(r.label) +
            '</button>'
          );
        })
        .join('') +
      '</div></div>'
    );
  }

  function renderStepFarmers() {
    var html =
      '<div class="space-y-4">' +
      '<p class="text-slate-700 text-sm">Nông dân nòng cốt: điền họ tên, địa chỉ, diện tích, điện thoại (có thể thêm nhiều dòng).</p>' +
      '<button type="button" id="btn-add-farmer" class="w-full min-h-[48px] rounded-xl border-2 border-dashed border-slate-300 text-slate-700 font-medium">+ Thêm nông dân</button>';

    state.farmers.forEach(function (f, idx) {
      html +=
        '<div class="rounded-2xl border border-orange-200 bg-orange-50/50 p-4 space-y-2">' +
        '<div class="flex justify-between items-center">' +
        '<span class="font-semibold text-slate-800">ND ' +
        (idx + 1) +
        '</span>' +
        (state.farmers.length > 1
          ? '<button type="button" data-rm-farmer="' +
            idx +
            '" class="text-sm text-red-600 font-medium">Xóa</button>'
          : '') +
        '</div>' +
        '<input type="text" data-f-idx="' +
        idx +
        '" data-f-key="name" placeholder="Họ và tên" class="w-full min-h-[48px] rounded-xl border border-slate-300 px-3" value="' +
        escapeHtml(f.name) +
        '" />' +
        '<input type="text" data-f-idx="' +
        idx +
        '" data-f-key="address" placeholder="Địa chỉ" class="w-full min-h-[44px] rounded-xl border border-slate-300 px-3 text-sm" value="' +
        escapeHtml(f.address) +
        '" />' +
        '<div class="grid grid-cols-2 gap-2">' +
        '<input type="text" data-f-idx="' +
        idx +
        '" data-f-key="dien_tich" placeholder="Diện tích (ha)" class="min-h-[44px] rounded-xl border border-slate-300 px-3" value="' +
        escapeHtml(f.dien_tich) +
        '" />' +
        '<input type="tel" data-f-idx="' +
        idx +
        '" data-f-key="phone" placeholder="Số điện thoại" class="min-h-[44px] rounded-xl border border-slate-300 px-3" value="' +
        escapeHtml(f.phone) +
        '" />' +
        '</div></div>';
    });
    html += '</div>';
    return html;
  }

  function renderStepConfirm() {
    var reg = getRegion();
    var html =
      '<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-4 text-sm text-slate-800">' +
      '<div><span class="text-slate-500">Khu vực</span><div class="font-semibold">' +
      escapeHtml(reg ? reg.label : '—') +
      '</div></div>' +
      '<div><span class="text-slate-500">Người báo cáo</span><div class="font-semibold">' +
      escapeHtml(state.reporter ? state.reporter.name || state.reporter.email : '—') +
      '</div><div class="text-xs text-slate-600">' +
      escapeHtml(state.reporter ? state.reporter.email : '') +
      '</div></div>';

    html += '<div class="border-t border-slate-200 pt-3"><span class="text-slate-600 font-medium">ND nòng cốt</span><ul class="list-disc list-inside mt-1">';
    state.farmers.forEach(function (f, i) {
      if ((f.name + f.address).trim())
        html +=
          '<li>' +
          escapeHtml(f.name || 'ND ' + (i + 1)) +
          ' — ' +
          escapeHtml(f.dien_tich || '?') +
          ' ha — ' +
          escapeHtml(f.phone || '') +
          '</li>';
    });
    html += '</ul></div>';

    var sg = state.selected_groups;
    html +=
      '<div class="border-t border-slate-200 pt-3"><span class="text-slate-600 font-medium">Nhóm đã chọn báo cáo chi tiết</span><div class="text-sm mt-1">' +
      [
        sg.lua ? 'Lúa' : null,
        sg.rau_hoa ? 'Rau & hoa kiểng' : null,
        sg.cay_an_trai ? 'Cây ăn trái' : null
      ]
        .filter(Boolean)
        .join(' · ') +
      '</div></div>';

    if (sg.lua) {
      html +=
        '<div class="border-t border-slate-200 pt-3"><span class="text-emerald-800 font-medium">Nhóm lúa</span>' +
        '<div class="mt-1"><span class="text-slate-500">Tổng DT (ha)</span> ' +
        escapeHtml(state.tong_dt_ha || '—') +
        '</div>';
      state.lua_entries.forEach(function (e) {
        ensureEntryGiaItems(e);
        html +=
          '<div class="mt-3 rounded-xl border border-emerald-100 bg-white p-3 text-xs">' +
          '<div class="font-semibold text-slate-900">' +
          escapeHtml(e.ten_giong) +
          '</div>' +
          '<div class="mt-1 text-slate-600">' +
          escapeHtml(labelById(DATA.growthStages, e.giai_doan) || e.giai_doan) +
          '</div>' +
          '<div class="mt-1 text-slate-600">Năng suất: ' +
          escapeHtml(e.nang_suat || '—') +
          '</div><ul class="list-disc list-inside mt-2 space-y-0.5">';
        if (e.sau_benh.length === 0) html += '<li>Không ghi sâu/bệnh</li>';
        e.sau_benh.forEach(function (r) {
          var pestL =
            r.pest_id === 'khac'
              ? (r.ten_khac || '').trim() || labelById(DATA.ricePests, 'khac')
              : labelById(DATA.ricePests, r.pest_id) || r.pest_id;
          html +=
            '<li>' +
            escapeHtml(pestL) +
            ' — mật độ: ' +
            escapeHtml(labelById(DATA.pestMatDo, r.mat_do) || r.mat_do) +
            '</li>';
        });
        html += '</ul><div class="mt-2 text-slate-700 font-medium">Giá</div>';
        if (e.gia_items.length === 0) {
          html += '<p class="text-xs text-slate-500 mt-1">Không ghi</p>';
        } else {
          html += '<ul class="list-disc list-inside mt-1">';
          e.gia_items.forEach(function (gi) {
            html +=
              '<li>' +
              escapeHtml(giaRowDisplayLabel('lua', gi)) +
              ': ' +
              formatMoney(num(gi.gia)) +
              '</li>';
          });
          html += '</ul>';
        }
        html += '</div>';
      });
      html += '</div>';
    }

    if (sg.rau_hoa) {
      html +=
        '<div class="border-t border-slate-200 pt-3"><span class="text-violet-800 font-medium">Rau & hoa kiểng</span>';
      state.rau_entries.forEach(function (e) {
        ensureEntryGiaItems(e);
        html +=
          '<div class="mt-3 rounded-xl border border-violet-100 bg-white p-3 text-xs">' +
          '<div class="font-semibold text-slate-900">' +
          escapeHtml(e.ten_loai) +
          '</div>' +
          '<div class="mt-1 text-slate-600">' +
          escapeHtml(labelById(DATA.vegGrowthStages, e.giai_doan) || e.giai_doan) +
          '</div>' +
          '<div class="mt-1 text-slate-600">Năng suất: ' +
          escapeHtml(e.nang_suat || '—') +
          '</div><ul class="list-disc list-inside mt-2 space-y-0.5">';
        if (e.sau_benh.length === 0) html += '<li>Không ghi sâu/bệnh</li>';
        e.sau_benh.forEach(function (r) {
          var pestL =
            r.pest_id === 'khac'
              ? (r.ten_khac || '').trim() || labelById(DATA.vegPests, 'khac')
              : labelById(DATA.vegPests, r.pest_id) || r.pest_id;
          html +=
            '<li>' +
            escapeHtml(pestL) +
            ' — mật độ: ' +
            escapeHtml(labelById(DATA.pestMatDo, r.mat_do) || r.mat_do) +
            '</li>';
        });
        html += '</ul><div class="mt-2 text-slate-700 font-medium">Giá</div>';
        if (e.gia_items.length === 0) {
          html += '<p class="text-xs text-slate-500 mt-1">Không ghi</p>';
        } else {
          html += '<ul class="list-disc list-inside mt-1">';
          e.gia_items.forEach(function (gi) {
            html +=
              '<li>' +
              escapeHtml(giaRowDisplayLabel('rau_hoa', gi)) +
              ': ' +
              formatMoney(num(gi.gia)) +
              '</li>';
          });
          html += '</ul>';
        }
        html += '</div>';
      });
      html += '</div>';
    }

    if (sg.cay_an_trai) {
      html +=
        '<div class="border-t border-slate-200 pt-3"><span class="text-teal-800 font-medium">Cây ăn trái</span>';
      state.trai_entries.forEach(function (e) {
        ensureEntryGiaItems(e);
        html +=
          '<div class="mt-3 rounded-xl border border-teal-100 bg-white p-3 text-xs">' +
          '<div class="font-semibold text-slate-900">' +
          escapeHtml(e.ten_loai) +
          '</div>' +
          '<div class="mt-1 text-slate-600">' +
          escapeHtml(labelById(DATA.fruitGrowthStages, e.giai_doan) || e.giai_doan) +
          '</div>' +
          '<div class="mt-1 text-slate-600">Năng suất: ' +
          escapeHtml(e.nang_suat || '—') +
          '</div><ul class="list-disc list-inside mt-2 space-y-0.5">';
        if (e.sau_benh.length === 0) html += '<li>Không ghi sâu/bệnh</li>';
        e.sau_benh.forEach(function (r) {
          var pestL =
            r.pest_id === 'khac'
              ? (r.ten_khac || '').trim() || labelById(DATA.fruitPests, 'khac')
              : labelById(DATA.fruitPests, r.pest_id) || r.pest_id;
          html +=
            '<li>' +
            escapeHtml(pestL) +
            ' — mật độ: ' +
            escapeHtml(labelById(DATA.pestMatDo, r.mat_do) || r.mat_do) +
            '</li>';
        });
        html += '</ul><div class="mt-2 text-slate-700 font-medium">Giá</div>';
        if (e.gia_items.length === 0) {
          html += '<p class="text-xs text-slate-500 mt-1">Không ghi</p>';
        } else {
          html += '<ul class="list-disc list-inside mt-1">';
          e.gia_items.forEach(function (gi) {
            html +=
              '<li>' +
              escapeHtml(giaRowDisplayLabel('cay_an_trai', gi)) +
              ': ' +
              formatMoney(num(gi.gia)) +
              '</li>';
          });
          html += '</ul>';
        }
        html += '</div>';
      });
      html += '</div>';
    }

    if (state.extra_crop_detail.trim()) {
      html +=
        '<div class="border-t border-slate-200 pt-3"><span class="text-slate-500">Chi tiết bổ sung</span><div class="whitespace-pre-wrap text-sm">' +
        escapeHtml(state.extra_crop_detail.trim()) +
        '</div></div>';
    }
    var mlinks = parseMediaLinkLines(state.media_links_text);
    if (mlinks.length) {
      html +=
        '<div class="border-t border-slate-200 pt-3"><span class="text-slate-500">Link ảnh / video</span><p class="text-sm mt-1">' +
        mlinks.length +
        ' link — kiểm tra lại trước khi gửi.</p><ul class="list-disc list-inside text-xs text-slate-600 mt-2 space-y-1 break-all">';
      mlinks.forEach(function (u) {
        html += '<li>' + escapeHtml(u.length > 80 ? u.slice(0, 77) + '…' : u) + '</li>';
      });
      html += '</ul></div>';
    }
    html += '</div>';
    return html;
  }

  function wire() {
    var root = document.getElementById('app-root');

    root.querySelectorAll('[data-region]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.region_id = b.getAttribute('data-region');
        render();
      });
    });

    ['lua', 'rau_hoa', 'cay_an_trai'].forEach(function (grp) {
      var m = CROP_GROUP_META[grp];
      var p = m.dataPrefix;
      root.querySelectorAll('[data-' + p + '-chip]').forEach(function (b) {
        b.addEventListener('click', function () {
          cropAddEntry(grp, b.getAttribute('data-' + p + '-chip'));
        });
      });
      var cin = document.getElementById(p + '_custom_input');
      if (cin) {
        cin.addEventListener('input', function () {
          state[m.bufferKey] = cin.value;
        });
      }
      var cadd = document.getElementById(p + '_custom_add');
      if (cadd) {
        cadd.addEventListener('click', function () {
          var t = String(state[m.bufferKey] || '').trim();
          if (!t) return;
          cropAddEntry(grp, t);
          state[m.bufferKey] = '';
          render();
        });
      }
      root.querySelectorAll('[data-' + p + '-rm]').forEach(function (b) {
        b.addEventListener('click', function () {
          cropRemoveEntry(grp, b.getAttribute('data-' + p + '-rm'));
        });
      });
      root.querySelectorAll('[data-' + p + '-stage]').forEach(function (sel) {
        sel.addEventListener('change', function () {
          cropSetStage(grp, sel.getAttribute('data-' + p + '-stage'), sel.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-add-pest]').forEach(function (b) {
        b.addEventListener('click', function () {
          cropAddPestRow(grp, b.getAttribute('data-' + p + '-add-pest'));
        });
      });
      root.querySelectorAll('[data-' + p + '-rm-pest]').forEach(function (b) {
        b.addEventListener('click', function () {
          var key = b.getAttribute('data-' + p + '-rm-pest').split(':');
          cropRemovePestRow(grp, key[0], parseInt(key[1], 10));
        });
      });
      root.querySelectorAll('[data-' + p + '-pest]').forEach(function (sel) {
        sel.addEventListener('change', function () {
          var key = sel.getAttribute('data-' + p + '-pest').split(':');
          cropSetPestPestId(grp, key[0], parseInt(key[1], 10), sel.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-md]').forEach(function (sel) {
        sel.addEventListener('change', function () {
          var key = sel.getAttribute('data-' + p + '-md').split(':');
          cropSetPestMatDo(grp, key[0], parseInt(key[1], 10), sel.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-ten]').forEach(function (inp) {
        inp.addEventListener('input', function () {
          cropSetTen(grp, inp.getAttribute('data-' + p + '-ten'), inp.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-khac]').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var key = inp.getAttribute('data-' + p + '-khac').split(':');
          cropSetPestTenKhac(grp, key[0], parseInt(key[1], 10), inp.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-ns]').forEach(function (inp) {
        inp.addEventListener('input', function () {
          cropSetNangSuat(grp, inp.getAttribute('data-' + p + '-ns'), inp.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-gia-loai]').forEach(function (sel) {
        sel.addEventListener('change', function () {
          var parts = splitEntryGiaAttr(sel.getAttribute('data-' + p + '-gia-loai'));
          cropSetGiaLoai(grp, parts.entryId, parts.rowId, sel.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-gia-k]').forEach(function (inp) {
        inp.addEventListener('input', function () {
          var parts = splitEntryGiaAttr(inp.getAttribute('data-' + p + '-gia-k'));
          cropSetGiaTenKhac(grp, parts.entryId, parts.rowId, inp.value);
        });
      });
      root.querySelectorAll('[data-' + p + '-gia-add]').forEach(function (b) {
        b.addEventListener('click', function () {
          cropAddGiaRow(grp, b.getAttribute('data-' + p + '-gia-add'));
        });
      });
      root.querySelectorAll('[data-' + p + '-gia-rm]').forEach(function (b) {
        b.addEventListener('click', function () {
          var parts = splitEntryGiaAttr(b.getAttribute('data-' + p + '-gia-rm'));
          cropRemoveGiaRow(grp, parts.entryId, parts.rowId);
        });
      });
      root.querySelectorAll('[data-' + p + '-gia-d]').forEach(function (b) {
        b.addEventListener('click', function () {
          var parts = splitEntryGiaAttr(b.getAttribute('data-' + p + '-gia-d'));
          cropGiaDelta(
            grp,
            parts.entryId,
            parts.rowId,
            parseInt(b.getAttribute('data-' + p + '-gia-pstep'), 10)
          );
        });
      });
      root.querySelectorAll('[data-' + p + '-gia-val]').forEach(function (inp) {
        inp.addEventListener('change', function () {
          var parts = splitEntryGiaAttr(inp.getAttribute('data-' + p + '-gia-val'));
          cropGiaInput(grp, parts.entryId, parts.rowId, inp.value);
        });
      });
    });

    var tong = document.getElementById('tong_dt_ha');
    if (tong) {
      tong.addEventListener('input', function () {
        state.tong_dt_ha = tong.value;
      });
    }
    var extraDet = document.getElementById('extra_crop_detail');
    if (extraDet) {
      extraDet.addEventListener('input', function () {
        state.extra_crop_detail = extraDet.value;
      });
    }
    var mediaLinksTa = document.getElementById('media_links_text');
    if (mediaLinksTa) {
      mediaLinksTa.addEventListener('input', function () {
        state.media_links_text = mediaLinksTa.value;
      });
    }

    var mediaUp = document.getElementById('media_upload');
    if (mediaUp) {
      mediaUp.addEventListener('change', function () {
        state.media_upload_error = '';
        var files = Array.prototype.slice.call(mediaUp.files || []);
        state.media_upload_files = files;
        state.media_upload_jobs = files.map(function (f) {
          return { name: f.name, size: f.size, status: 'pending', url: '', error: '' };
        });
        render();
      });
    }
    var mediaUpBtn = document.getElementById('btn-media-upload');
    if (mediaUpBtn) {
      mediaUpBtn.addEventListener('click', function () {
        startMediaUpload();
      });
    }

    root.querySelectorAll('[data-crop-grp]').forEach(function (b) {
      b.addEventListener('click', function () {
        toggleGroupCrop(b.getAttribute('data-crop-grp'));
      });
    });

    var addF = document.getElementById('btn-add-farmer');
    if (addF) addF.addEventListener('click', addFarmer);
    root.querySelectorAll('[data-rm-farmer]').forEach(function (b) {
      b.addEventListener('click', function () {
        removeFarmer(parseInt(b.getAttribute('data-rm-farmer'), 10));
      });
    });
    root.querySelectorAll('[data-f-idx]').forEach(function (inp) {
      inp.addEventListener('input', function () {
        var idx = parseInt(inp.getAttribute('data-f-idx'), 10);
        var key = inp.getAttribute('data-f-key');
        setFarmerField(idx, key, inp.value);
      });
    });

    root.querySelectorAll('button[data-pgrp][data-pstep]').forEach(function (b) {
      if (!b.getAttribute('data-pid')) return;
      b.addEventListener('click', function () {
        priceDelta(
          b.getAttribute('data-pgrp'),
          b.getAttribute('data-pid'),
          parseInt(b.getAttribute('data-pstep'), 10)
        );
      });
    });
    root.querySelectorAll('input[data-pgrp][data-pid]').forEach(function (inp) {
      inp.addEventListener('change', function () {
        priceInput(inp.getAttribute('data-pgrp'), inp.getAttribute('data-pid'), inp.value);
      });
    });

    var backBtn = document.getElementById('btn-back');
    if (backBtn) backBtn.addEventListener('click', back);
    var nextBtn = document.getElementById('btn-next');
    if (nextBtn) nextBtn.addEventListener('click', next);
    var subBtn = document.getElementById('btn-submit');
    if (subBtn) subBtn.addEventListener('click', submit);
    var lo = document.getElementById('btn-logout');
    if (lo) lo.addEventListener('click', logout);
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadReporterFromStorage();
    render();
  });
})();
